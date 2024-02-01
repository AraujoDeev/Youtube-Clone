import React, { useEffect, useLayoutEffect, useState } from 'react'
import Templates from '../../Components/Templates'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Container, ShortsContainer, ShortsStyle, ShortsVideo } from './shorts'
import getVideos, { User } from '../../services/getVideos'
import { useParams, useNavigate } from 'react-router-dom'

const Shorts: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [shorts, setShorts] = useState<User[]>([])

  const apiVideos = async () => {
    try {
      const res = await getVideos()
      const sortedArray = [...res].sort((a, b) => {
        // Se a ID for igual à ID do objeto alvo, coloque-o em uma posição inferior
        if (a.id == id) return -1
        // Caso contrário, mantenha a ordem atual
        return 0
      })
      setShorts(sortedArray)
    } catch (error) {
      console.error('Error fetching videos:', error)
    }
  }

  function handleScroll(newId: string) {
    // Obtenha todos os elementos de vídeo
    const videos = document.querySelectorAll('video')

    videos.forEach((video) => {
      // Verifique se o vídeo está visível na janela

      if (video.id == newId) {
        // O vídeo está na visão do usuário, reproduza ou retome a reprodução
        video.play()
      } else {
        // O vídeo não está na visão do usuário, pause
        video.pause()
        video.currentTime = 0
      }
    })
  }

  const changeShorts = (index: number, item: User) => {
    const newId = item.key.substring(2)
    const newUrl = `/shorts/${newId}`
    navigate(`${newUrl}`)
    handleScroll(newId)
  }

  useLayoutEffect(() => {
    apiVideos()
  }, [])

  return (
    <Templates>
      <Container>
        <ShortsStyle>
          <Carousel
            className="teste"
            onChange={changeShorts}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            axis="vertical"
            useKeyboardArrows
            autoFocus
            verticalSwipe="standard"
          >
            {shorts.map((short) => (
              <ShortsContainer key={short.id}>
                <ShortsVideo id={short.id} loop autoPlay={short.id == id}>
                  <source style={{ width: '8%' }} src={short.video} />
                </ShortsVideo>
              </ShortsContainer>
            ))}
          </Carousel>
        </ShortsStyle>
      </Container>
    </Templates>
  )
}

export default Shorts
