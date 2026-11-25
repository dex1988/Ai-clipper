const { test } = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const React = require('react')
const { act } = React
const { createRoot } = require('react-dom/client')
const { loadTs } = require('./load-ts.cjs')

function installDom(window) {
  const keys = ['window', 'document', 'navigator', 'HTMLElement', 'IS_REACT_ACT_ENVIRONMENT']
  const previous = Object.fromEntries(keys.map(key => [key, globalThis[key]]))
  globalThis.window = window
  globalThis.document = window.document
  globalThis.navigator = window.navigator
  globalThis.HTMLElement = window.HTMLElement
  globalThis.IS_REACT_ACT_ENVIRONMENT = true
  window.HTMLMediaElement.prototype.pause = function () {}
  return () => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key]
      else globalThis[key] = value
    }
  }
}

function loadPicker(candidates) {
  const t = (text, values) => Object.entries(values || {}).reduce((result, [key, value]) => result.replace(`{{${key}}}`, value), text)
  return loadTs(path.join(__dirname, '../src/features/studio/CandidatePicker.tsx'), {
    'react-i18next': { useTranslation() {} },
    '../../i18n': { t },
    '../../ui': {
      Btn: ({ children, onClick, disabled }) => React.createElement('button', { type: 'button', onClick, disabled }, children),
      Dialog: ({ children, description, footer }) => React.createElement('div', { role: 'dialog' }, description, children, footer),
      fmtDuration: value => `${value}s`,
    },
    './api': {
      studioApi: {
        candidates: async () => ({ duration: 60, candidates, warnings: [] }),
        source: () => '/source.mp4',
      },
      errorText: String,
    },
  }).default
}

function checkboxFor(root, label) {
  return [...root.querySelectorAll('input[type="checkbox"]')].find(input => input.closest('label').textContent.includes(label))
}

function radioFor(root, label) {
  return [...root.querySelectorAll('input[type="radio"]')].find(input => input.closest('label').textContent.includes(label))
}

function actionButton(root, label) {
  return [...root.querySelectorAll('button')].find(button => button.textContent === label)
}

const candidates = [
  { id: 'one', label: 'First moment', start: 4, end: 9, evidence: 'A clear payoff', kind: 'visual' },
  { id: 'two', label: 'Second moment', start: 14, end: 20, evidence: 'A new obstacle', kind: 'legacy' },
  { id: 'three', label: 'Third moment', start: 30, end: 38, evidence: 'A final win', kind: 'visual' },
]

test('append picker adds selected candidates in click order and respects the scene limit', async () => {
  const { Window } = require('happy-dom')
  const window = new Window({ url: 'http://localhost/' })
  const restore = installDom(window)
  const host = document.createElement('div')
  document.body.appendChild(host)
  const root = createRoot(host)
  const chosen = []
  try {
    const Picker = loadPicker(candidates)
    await act(async () => { root.render(React.createElement(Picker, {
      projectId: 'project', mode: 'append', maxSelections: 2, onClose() {},
      onChoose: selected => chosen.push(selected),
    })) })
    const first = checkboxFor(host, 'Third moment')
    const second = checkboxFor(host, 'First moment')
    const capped = checkboxFor(host, 'Second moment')
    await act(async () => { first.click() })
    await act(async () => { second.click() })
    assert.equal(capped.disabled, true)
    assert.ok(host.textContent.includes('单条成片最多 30 个镜头'))
    assert.deepEqual([...host.querySelectorAll('input[type="checkbox"]')].filter(input => input.checked).map(input => input.closest('label').textContent.match(/First moment|Second moment|Third moment/)[0]), ['First moment', 'Third moment'])
    await act(async () => { actionButton(host, '追加到成片').click() })
    assert.deepEqual(Array.from(chosen[0], candidate => candidate.id), ['three', 'one'])
  } finally {
    await act(async () => { root.unmount() })
    window.close()
    restore()
  }
})

test('replace picker keeps its single-selection behavior', async () => {
  const { Window } = require('happy-dom')
  const window = new Window({ url: 'http://localhost/' })
  const restore = installDom(window)
  const host = document.createElement('div')
  document.body.appendChild(host)
  const root = createRoot(host)
  const chosen = []
  try {
    const Picker = loadPicker(candidates)
    await act(async () => { root.render(React.createElement(Picker, {
      projectId: 'project', mode: 'replace', onClose() {},
      onChoose: selected => chosen.push(selected),
    })) })
    await act(async () => { radioFor(host, 'Second moment').click() })
    await act(async () => { actionButton(host, '替换镜头').click() })
    assert.equal(chosen[0].id, 'two')
  } finally {
    await act(async () => { root.unmount() })
    window.close()
    restore()
  }
})
