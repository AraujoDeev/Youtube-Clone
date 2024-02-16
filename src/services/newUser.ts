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
  } catch (err) {
    console.log(err)
  }
}
