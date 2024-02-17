import { useEffect, useState } from 'react'
import Templates from '../../Components/Templates'
import axios, { AxiosResponse, AxiosError } from 'axios'
import {
  AmountLikes,
  ButtonLike,
  DescContainer,
  LikeContainer,
  LineHeight,
  MainContent,
  NotLike,
  PageVideoContainer,
  Subscribe,
  SubscribeContainer,
  TitleVideo,
  Video,
  VideoContainer,
} from './videos'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import SecondaryVideos from '../../Components/SecondaryVideos'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'

interface User {
  id: number
  video: string
  thumbnail: string
  title: string
  viewsAmount: number
  likesAmount: number
}

const PageVideos = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  const { id } = useParams()
  const [selectedVideo, setSelectedVideo] = useState<User | null>(null)
  const [message, setMessage] = useState<string>('')
  const [likesAmount, setLikesAmount] = useState<number | null>(null)

  useEffect(() => {
    const apiVideos = async () => {
      try {
        const res: AxiosResponse = await axios.get(
          `http://localhost:8080/video/${id}`
        )
        setSelectedVideo(res.data.video as User)
      } catch (err: AxiosError | any) {
        if (err.response) {
          setMessage(err.response.data.message)
        } else {
          setMessage('Erro: Tente mais tarde!')
        }
      }
    }

    if (id) {
      apiVideos()
    }
  }, [id])

  if (likesAmount == null) {
    setLikesAmount(0)
  }

  const updateLikes = async (id: number) => {
    if (!auth?.token) {
      alert('You must be logged in to see the video')
      return navigate('/login')
    }
    try {
      if (selectedVideo) {
        const updatedLikes =
          selectedVideo.likesAmount !== null ? selectedVideo.likesAmount + 1 : 1

        const res: AxiosResponse = await axios.put(
          `http://localhost:8080/video/${id}/update-likes`,
          { likesAmount: updatedLikes }
        )

        setSelectedVideo((prevState) => ({
          ...prevState!,
          likesAmount: updatedLikes,
        }))
      }
    } catch (error) {
      console.error('Erro ao atualizar likes:', error)
      setMessage('Erro ao atualizar likes')
    }
  }

  useEffect(() => {
    updateLikes
  }, [selectedVideo?.likesAmount])

  return (
    <Templates>
      <PageVideoContainer>
        <MainContent>
          {selectedVideo ? (
            <VideoContainer>
              <Video controls autoPlay>
                <source src={selectedVideo.video} />
              </Video>

              <TitleVideo>{selectedVideo.title}</TitleVideo>
              <DescContainer>
                <p>
                  {selectedVideo.viewsAmount}{' '}
                  {selectedVideo.viewsAmount > 1
                    ? 'visualizações'
                    : 'visualização'}{' '}
                </p>
                <SubscribeContainer>
                  <Subscribe>Inscreva-se</Subscribe>
                </SubscribeContainer>
                <LikeContainer>
                  <ButtonLike onClick={() => updateLikes(selectedVideo.id)}>
                    <ThumbUpIcon />
                    <AmountLikes>
                      {selectedVideo.likesAmount == null
                        ? '0'
                        : selectedVideo.likesAmount}
                    </AmountLikes>
                  </ButtonLike>
                  <LineHeight />
                  <NotLike>
                    <ThumbDownAltIcon />
                  </NotLike>
                </LikeContainer>
              </DescContainer>
            </VideoContainer>
          ) : (
            <p>Carregando...</p>
          )}
        </MainContent>
        <SecondaryVideos />
      </PageVideoContainer>
    </Templates>
  )
}
export default PageVideos
