import API from '../../services/api'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u')
  if (!json) {
    return null
  }

  const user = JSON.parse(json)
  return user ?? null
}

export async function loginRequest(email: string, password: string) {
  try {
    const request = await API.post('/login', { email, password })

    return request.data
  } catch (err: any) {
    if (err.response.status === 404) {
      return {
        message: 'E-mail e/ou senha invalida',
        status: 404,
        severity: 'error',
      }
    }
    if (err.response.status === 422) {
      return {
        message: `${err.response.data.msg}`,
        status: 404,
        severity: 'error',
      }
    }
  }
}
