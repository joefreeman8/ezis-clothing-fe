const setToken = (token) => {
  localStorage.setItem('token', token)
}

const getToken = () => {
  return localStorage.getItem('token')
}

const getPayload = () => {
  const token = getToken()
  if (!token) {
    return false
  }
  const parts = token.split('.')
  if (parts.length < 3) {
    return false
  }
  return JSON.parse(Buffer.from(parts[1], 'base64'))
}

export const AUTH = {
  setToken,
  getToken,
  getPayload
}