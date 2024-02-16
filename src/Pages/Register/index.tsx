import { useState } from 'react'
import Templates from '../../Components/Templates'
import {
  ActionsButtons,
  Backdrop,
  Button,
  Buttons,
  CheckIcon,
  Container,
  ErrorIcon,
  Form,
  Input,
  Modal,
  Title,
} from './register'
import { createUser } from '../../services/newUser'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
  })
  const [backdrop, setBackdrop] = useState<boolean>(false)
  const [message, setMessage] = useState({
    message: '',
    icon: '',
    type: '',
  })

  const user = { ...form }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setForm({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      username: '',
    })

    try {
      const response = await createUser(user)
      setMessage({
        message: 'Usuário criado com sucesso!',
        type: 'success',
        icon: '',
      })
    } catch (error) {
      setMessage({
        message: 'Algo deu errado!',
        icon: '',
        type: 'danger',
      })
    }
    setBackdrop(true)
  }

  const closeModal = () => {
    setBackdrop(false)
  }

  return (
    <Templates>
      <Container>
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            value={form.first_name}
            required
            placeholder="Type your name..."
            type="text"
            id="name"
            name="name"
          />

          <Input
            onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            value={form.last_name}
            required
            placeholder="Type your last name..."
            type="text"
            id="lastName"
            name="lastName"
          />

          <Input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            required
            placeholder="Type your email..."
            type="email"
            id="email"
            name="email"
          />

          <Input
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
            required
            placeholder="Type your password..."
            type="password"
            id="password"
            name="password"
          />

          <Input
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            value={form.username}
            required
            placeholder="Type your username..."
            type="username"
            id="username"
            name="username"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Container>
      {backdrop && (
        <Backdrop>
          <Modal>
            {message.type == 'success' && (
              <>
                <p>{message.message}</p>
                <CheckIcon />
              </>
            )}
            {message.type != 'success' && (
              <>
                <p>{message.message}</p>
                <ErrorIcon />
              </>
            )}
            <ActionsButtons>
              <Buttons onClick={() => navigate('/login')}>Login</Buttons>
            </ActionsButtons>
          </Modal>
        </Backdrop>
      )}
    </Templates>
  )
}
