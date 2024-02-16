import API from './api'

interface ICreateUser {
  first_name: string
  last_name: string // Mudança feita aqui para corresponder ao tipo 'ICreateUser'
  email: string
  password: string
  username: string
}

export const createUser = async (userData: ICreateUser) => {
  try {
    const response = await API.post('/register', userData)
    return response
  } catch (error: any) {
    if (error.code == 'ERR_BAD_REQUEST') {
      return {
        message: error.response.data.msg,
        status: 422,
      }
    }
    const erro = {
      message: error.response.data,
      status: error.response.status,
    }
    return erro
  }
}
