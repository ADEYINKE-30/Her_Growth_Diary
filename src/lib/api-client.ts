const apiBaseUrl = (
  (import.meta as ImportMeta & { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL ?? '/api'
).replace(/\/$/, '')

export class ApiClientError extends Error {
  readonly status: number
  readonly code?: string

  constructor(message: string, status: number, code?: string) {
    super(message)
    this.name = 'ApiClientError'
    this.status = status
    this.code = code
  }
}

export async function apiClient<T>(path: string, init?: RequestInit): Promise<T> {
  const method = init?.method?.toUpperCase() ?? 'GET'
  const csrfToken = typeof document === 'undefined'
    ? undefined
    : document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('hgd_admin_csrf='))
    ?.split('=')[1]

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...(method !== 'GET' && method !== 'HEAD' && csrfToken
        ? { 'X-CSRF-Token': decodeURIComponent(csrfToken) }
        : {}),
      ...init?.headers,
    },
  })

  const responseText = await response.text()
  let responseBody: unknown = null
  if (responseText) {
    try {
      responseBody = JSON.parse(responseText)
    } catch {
      responseBody = null
    }
  }

  if (!response.ok) {
    const errorBody = responseBody as { message?: string; code?: string } | null

    throw new ApiClientError(
      errorBody?.message ?? 'Unable to load this content.',
      response.status,
      errorBody?.code,
    )
  }

  return responseBody as T
}
