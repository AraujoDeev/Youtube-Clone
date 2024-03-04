import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, ButtonLogOut } from './popover'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useNavigate } from 'react-router-dom'
import { Box, Popper } from '@mui/material'

export default function PopoverPopupState({ username }: any) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const logout = () => {
    if (username) {
      localStorage.removeItem('u')
      navigate('/login')
      location.reload()
    } else {
      navigate('/login')
    }
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined
  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        <AccountCircleOutlinedIcon
          titleAccess={username ? username : 'Entrar'}
        />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          height={'auto'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'space-around'}
          color={'white'}
          padding={'8px 12px'}
          borderRadius={2}
          sx={{ bgcolor: '#343737' }}
        >
          <Typography>{username ? <>{username}</> : <></>}</Typography>

          <ButtonLogOut onClick={logout}>
            {username ? <>Log out</> : <>Entrar</>}
          </ButtonLogOut>
        </Box>
      </Popper>
    </div>
  )
}
