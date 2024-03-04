import React, { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from './utils'
import { Alert, Slide, SlideProps, Snackbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext<IContext>({} as IContext)

type Status = 'info' | 'success' | 'warning' | 'error' | undefined

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const navigate = useNavigate()
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: '',
  })
  const [status, setStatus] = useState<Status>()
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()
    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    try {
      const response = await loginRequest(email, password)
      if (response.token) {
        navigate('/')

        const payload = {
          token: response.token,
          email,
          username: response.username,
        }

        setUser(payload)
        setUserLocalStorage(payload)
      }

      if (response.status === 404 || response.status === 422) {
        setSnackBar({
          open: true,
          message: `${response.message}`,
        })
        setStatus(response.severity)
      }
    } catch (err: any) {
      console.log(err)
    }
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setSnackBar({ open: false, message: '' })
  }

  const TransitionLeft: React.FC<SlideProps> = (props: SlideProps) => {
    return <Slide {...props} direction="left" />
  }

  return (
    <>
      <AuthContext.Provider value={{ ...user, authenticate, logout }}>
        {children}
      </AuthContext.Provider>
      <Snackbar
        open={snackBar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={TransitionLeft}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {snackBar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
