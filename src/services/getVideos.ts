import { AxiosError } from 'axios'
import API from './api'

export interface User {
  id: string
  video: string
  thumbnail: string
  viewsAmount: number
  title: string
}

const getVideos = async (videoId?: string) => {
  try {
    const res = await API.get('/users', { params: { id: videoId } })
    return res.data.users
  } catch (err: AxiosError | any) {
    console.error('Erro na requisição de dados do usuário', err)
    return []
  }
}

export default getVideos
