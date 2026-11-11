const TOKEN_KEY = 'zicer_token'
export const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) || '' } catch { return '' } }
export const setToken = (t) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY) } catch {} }
export const tz = () => -new Date().getTimezoneOffset()

export class ApiError extends Error {
  constructor(code, status) { super(code); this.code = code; this.status = status }
}

export async function api(path, { method = 'GET', body } = {}) {
  const headers = { Accept: 'application/json' }
  const tok = getToken()
  if (tok) headers.Authorization = `Bearer ${tok}`
  const isForm = typeof FormData !== 'undefined' && body instanceof FormData
  if (body !== undefined && !isForm) headers['Content-Type'] = 'application/json'
  const r = await fetch(`/api${path}`, { method, headers, body: body === undefined ? undefined : isForm ? body : JSON.stringify(body), cache: 'no-store' })
  let data = null
  try { data = await r.json() } catch {}
  if (!r.ok) {
    if (r.status === 401) setToken('')
    const d = data && data.detail
    throw new ApiError(typeof d === 'string' ? d : 'error', r.status)
  }
  return data
}
