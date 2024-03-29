import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import {
  DescVideos,
  SectionVideos,
  Thumbnail,
  ThumbnailContainer,
  TitleVideo,
  VideoContainer,
  Views,
} from './videos'
import { useNavigate } from 'react-router-dom'

interface User {
  id: number
  thumbnail: string
  title: string
  viewsAmount: number
}

const Videos: React.FC = () => {
  const navigate = useNavigate()
  const [videos, setVideos] = useState<User[]>([])
  console.log(videos)
  const [videoPesquisado, setVideoPesquisado] = useState('')
  const [viewsAmount, setViewsAmount] = useState<number | null>(null)
  const [message, setMessage] = useState<string>('')

  const apiVideos = async () => {
    try {
      const res: AxiosResponse = await axios.get('http://localhost:8080/videos')
      setVideos(res.data.videos as User[])

      if (viewsAmount === null) {
        setViewsAmount(0)
      }
    } finally {
    }
  }

  const filteredVideo =
    videoPesquisado !== ''
      ? videos.filter((item) => item.title.includes(videoPesquisado))
      : videos

  const updateViews = async (user: any) => {
    try {
      const updatedViews = viewsAmount !== null ? viewsAmount + 1 : 1

      const res: AxiosResponse = await axios.put(
        `http://localhost:8080/video/${user.id}/update-views`,
        { viewsAmount: updatedViews }
      )

      setViewsAmount(updatedViews)
    } catch (error) {
      console.error('Erro ao atualizar visualizações:', error)
      setMessage('Erro ao atualizar visualizações')
    }
    navigate(`page-videos/${user.id}`)
  }

  useEffect(() => {
    apiVideos()
  }, [])

  return (
    <>
      <SectionVideos>
        {videos.map((user: User) => (
          <VideoContainer onClick={() => updateViews(user)} key={user.id}>
            <ThumbnailContainer className="thumbnail-container">
              <Thumbnail src={user.thumbnail} alt="Thumbnail do video" />
            </ThumbnailContainer>
            <DescVideos className="desc-video">
              <TitleVideo>{user.title}</TitleVideo>
              <Views>
                {user.viewsAmount} {user.viewsAmount == null ? '0' : ''}{' '}
                {user.viewsAmount > 1 ? 'visualizações' : 'visualização'}
              </Views>
            </DescVideos>
          </VideoContainer>
        ))}
      </SectionVideos>
    </>
  )
}

export default Videos
