import API from '../services/api'

interface ErrorResponse {
  message: string
  status: number
}

export const createSession = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await API.post('/auth/login', { email, password })
    return response
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      return {
        message: 'ERR_NETWORK',
        status: 500,
      }
    }
    const erro: ErrorResponse = {
      message: error.response.data.msg,
      status: error.response.status,
    }
    return erro
  }
}
