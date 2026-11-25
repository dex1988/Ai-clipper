export function matchesProjectStatus(status: string, filter: string | null | undefined): boolean {
  if (!filter || filter === 'all') return true
  const normalizedStatus = status === 'error' ? 'failed' : status
  const normalizedFilter = filter === 'error' ? 'failed' : filter
  return normalizedStatus === normalizedFilter
}
