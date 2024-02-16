import API from './api'

interface ICreateUser {
  name: string
  lastName: string // Mudança feita aqui para corresponder ao tipo 'ICreateUser'
  email: string
  password: string
  username: string
}

export const createUser = async (userData: ICreateUser) => {
  try {
    const response = await API.post('/register', userData)
    return response
  } catch (err) {
    console.log(err)
  }
}
