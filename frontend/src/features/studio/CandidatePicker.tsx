import { useTranslation } from 'react-i18next'
import { t } from '../../i18n'
import { useEffect, useRef, useState } from 'react'
import { Btn, Dialog, fmtDuration } from '../../ui'
import { studioApi, errorText } from './api'
import { Candidate, CandidateList } from './types'

interface Props {
  projectId: string
  mode: 'append' | 'replace'
  maxSelections?: number
  onClose: () => void
  onChoose: (candidate: Candidate | Candidate[]) => void
}

export default function CandidatePicker({ projectId, mode, maxSelections = 30, onClose, onChoose }: Props) {
  useTranslation()
  const [data, setData] = useState<CandidateList | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [version, setVersion] = useState(0)
  const [preview, setPreview] = useState<Candidate | null>(null)
  const [selected, setSelected] = useState<Candidate[]>([])
  const video = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true); setError('')
    studioApi.candidates(projectId, controller.signal).then(result => {
      if (!controller.signal.aborted) {
        const first = result.candidates[0] || null
        setData(result); setPreview(first); setSelected(mode === 'replace' && first ? [first] : [])
      }
    }).catch(e => { if (!controller.signal.aborted) setError(t(errorText(e))) }).finally(() => {
      if (!controller.signal.aborted) setLoading(false)
    })
    return () => controller.abort()
  }, [projectId, version])
  useEffect(() => {
    if (video.current && preview) { video.current.pause(); video.current.currentTime = preview.start }
  }, [preview?.id])
  const choose = (candidate: Candidate) => {
    setPreview(candidate)
    if (mode === 'replace') { setSelected([candidate]); return }
    setSelected(current => {
      if (current.some(item => item.id === candidate.id)) return current.filter(item => item.id !== candidate.id)
      return current.length < maxSelections ? [...current, candidate] : current
    })
  }
  const selectedIds = new Set(selected.map(candidate => candidate.id))
  const limitReached = mode === 'append' && selected.length >= maxSelections && !!data?.candidates.some(candidate => !selectedIds.has(candidate.id))
  return <Dialog open title={mode === 'append' ? t("追加一个镜头") : t("替换当前镜头")} onClose={onClose}
    description={mode === 'append'
      ? t("选择多个高光，按选择顺序加入成片。")
      : t("从当前素材的高光和已有切片中选择。先预览，再加入成片；修改保存后生效。")}
    footer={<div className="studio-actions"><Btn onClick={onClose}>{t("取消")}</Btn><Btn variant="cta" disabled={!selected.length || loading || !!error} onClick={() => selected.length && onChoose(mode === 'append' ? selected : selected[0])}>{mode === 'append' ? t("追加到成片") : t("替换镜头")}</Btn></div>}>
    {loading ? <p className="studio-muted">{t("加载可用片段…")}</p> : error ? <div role="alert"><p className="studio-error">{error}</p><Btn onClick={() => setVersion(v => v + 1)}>{t("重试")}</Btn></div> : <>
      {preview && <><video ref={video} className="studio-candidate-video" controls preload="metadata" src={studioApi.source(projectId)}
        onLoadedMetadata={() => { if (video.current) video.current.currentTime = preview.start }}
        onTimeUpdate={() => { const v = video.current; if (v && v.currentTime >= preview.end) { v.pause(); v.currentTime = preview.start } }} />
        <p className="studio-muted">{t("原片")}{' '}{t('{{start}}–{{end}} 秒', { start: preview.start.toFixed(1), end: preview.end.toFixed(1) })} · {preview.evidence || t("请核对镜头起止和玩法完整性。")}</p></>}
      {data?.warnings.map(w => <p className="studio-muted" key={w}>{t(w)}</p>)}
      {limitReached && <p className="studio-muted" role="status">{t("单条成片最多 30 个镜头")}</p>}
      {!data?.candidates.length && <p className="studio-muted">{t("当前没有可用候选。可返回项目重新分析，或调整已有镜头的起止时间。")}</p>}
      <div className="studio-candidate-list" role={mode === 'append' ? 'group' : 'radiogroup'} aria-label={t("候选片段")}>{data?.candidates.map(c => <label className="studio-candidate-option" key={c.id}>
        <input type={mode === 'append' ? 'checkbox' : 'radio'} name="candidate" checked={mode === 'append' ? selectedIds.has(c.id) : preview?.id === c.id}
          disabled={mode === 'append' && !selectedIds.has(c.id) && selected.length >= maxSelections}
          onChange={() => mode === 'append' ? choose(c) : (setPreview(c), setSelected([c]))} />
        <span><b>{c.label}</b><small>{c.kind === 'visual' ? t("视觉高光") : t("已有切片")} · {t('{{start}}–{{end}} 秒', { start: c.start.toFixed(1), end: c.end.toFixed(1) })} · {fmtDuration(c.end - c.start)}</small></span>
      </label>)}</div>
    </>}
  </Dialog>
}
