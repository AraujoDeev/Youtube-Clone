import HomeIcon from '@mui/icons-material/Home'
import ShortsIconDark from '../../assets/images/shorts-icon-dark.svg'
import RegistrationIconDark from '../../assets/images/registrations-icon-dark.svg'
import YouIconDark from '../../assets/images/you-icon-dark.svg'
import { ButtonIcons, MenuStyles, SVGIcon, SubTitlesButtons } from './menu'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()
  const [id, setId] = useState<number>()
  const apiVideos = async () => {
    try {
      const res: AxiosResponse = await axios.get('http://localhost:8080/videos')
      setId(res.data.videos[0].id)
    } catch (err: AxiosError | any) {
      if (err.response) {
      } else {
      }
    }
  }
  useEffect(() => {
    apiVideos()
  }, [])

  return (
    <MenuStyles>
      <ButtonIcons onClick={() => navigate('/')} title="Inicio">
        <HomeIcon />
        <SubTitlesButtons>Inicio</SubTitlesButtons>
      </ButtonIcons>
      <ButtonIcons title="Shorts">
        <SVGIcon
          onClick={() => navigate(`/shorts/${id}`)}
          src={ShortsIconDark}
          alt="Logo Shorts"
        />
        <SubTitlesButtons>Shorts</SubTitlesButtons>
      </ButtonIcons>
      <ButtonIcons title="Indisponivel">
        <SVGIcon src={RegistrationIconDark} alt="Logo Registrations" />
        <SubTitlesButtons>Inscricoes</SubTitlesButtons>
      </ButtonIcons>
      <ButtonIcons title="Indisponivel">
        <SVGIcon src={YouIconDark} alt="Logo You" />
        <SubTitlesButtons>Voce</SubTitlesButtons>
      </ButtonIcons>
    </MenuStyles>
  )
}

export default Menu
