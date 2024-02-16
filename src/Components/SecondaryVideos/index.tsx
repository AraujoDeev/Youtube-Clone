import axios, { AxiosError, AxiosResponse } from 'axios'
import {
  Desc,
  SecondaryThumbnail,
  SecondaryVideo,
  SecondaryVideosContainer,
  Thumbnail,
  Title,
  ViewsAmount,
} from './secondaryVideos'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface User {
  id: number
  thumbnail: string
  viewsAmount: number
  title: string
}

const SecondaryVideos = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [videos, setVideos] = useState<User[]>([])
  const [message, setMessage] = useState<string>('')
  const [mainVideoId, setMainVideoId] = useState<number>(0)
  console.log(videos)

  const apiVideos = async () => {
    try {
      const res: AxiosResponse = await axios.get('http://localhost:8080/videos')
      console.log(res)
      const data = res.data.videos as User[]

      if (data.length > 0) {
        const filteredVideos = data.filter(
          (video) => video.id !== parseInt(id!, 10)
        )
        setVideos(filteredVideos)
      }
    } catch (err: AxiosError | any) {
      if (err.response) {
        setMessage(err.response.data.message)
      } else {
        setMessage('Erro: Tente mais tarde!')
      }
    }
  }

  const redirectVideo = async (id: number, viewsAmount: number) => {
    try {
      const updatedViews = viewsAmount + 1

      await axios.put(`http://localhost:8080/videos/${id}/update-views`, {
        viewsAmount: updatedViews,
      })

      navigate(`/page-videos/${id}`)
      window.location.reload()
    } catch (error) {
      console.error('Erro ao atualizar visualizações:', error)
      setMessage('Erro ao atualizar visualizações')
    }
  }

  useEffect(() => {
    apiVideos()
  }, [])

  return (
    <SecondaryVideosContainer>
      {videos.map((video) =>
        video.id !== mainVideoId ? (
          <SecondaryThumbnail
            onClick={() => redirectVideo(video.id, video.viewsAmount)}
            key={video.id}
          >
            <SecondaryVideo>
              <Thumbnail src={video.thumbnail} />
            </SecondaryVideo>
            <Desc>
              <Title>{video.title}</Title>
              <ViewsAmount>
                {video.viewsAmount}
                {video.viewsAmount == null ? '0' : ''}{' '}
                {video.viewsAmount > 1 ? 'visualizações' : 'visualização'}
              </ViewsAmount>
            </Desc>
          </SecondaryThumbnail>
        ) : null
      )}
    </SecondaryVideosContainer>
  )
}

export default SecondaryVideos
