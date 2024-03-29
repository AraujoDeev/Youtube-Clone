import {
  ButtonIcon,
  ButtonSearch,
  HeaderStyle,
  Icons,
  ImgLogo,
  Logo,
  MenuBurguer,
  Profile,
  Seacrh,
  SeacrhInput,
} from './header'
import darkLogo from '../../assets/images/logo-dark.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider/useAuth'
import PopoverPopupState from '../Popover'
const Header = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const username = auth.username

  return (
    <HeaderStyle>
      <Logo>
        <MenuBurguer>
          <MenuOutlinedIcon />
        </MenuBurguer>
        <ImgLogo
          onClick={() => navigate('/')}
          src={darkLogo}
          alt="Logo do Youtube"
        />
      </Logo>
      <Seacrh title="Pesquisar">
        <SeacrhInput placeholder="Pesquisar" type="search" />
        <ButtonSearch>
          <SearchIcon />
        </ButtonSearch>
      </Seacrh>
      <Profile>
        <Icons>
          <div onClick={() => navigate('/uploads')} className="newVideo">
            <ButtonIcon title="Criar">
              <VideoCallOutlinedIcon />
            </ButtonIcon>
          </div>
          <div className="messages">
            <ButtonIcon title="Notificacoes">
              <NotificationsNoneOutlinedIcon />
            </ButtonIcon>
          </div>
          <div className="profileLogged">
            <PopoverPopupState username={username} />
          </div>
        </Icons>
      </Profile>
    </HeaderStyle>
  )
}

export default Header
