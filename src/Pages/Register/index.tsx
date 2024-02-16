import { useState } from 'react'
import Templates from '../../Components/Templates'
import { Button, Container, Form, Input, Title } from './register'
import { createUser } from '../../services/newUser'

export default function Register() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
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
      console.log('Usuário criado com sucesso:', response)
    } catch (error) {
      console.error('Erro ao criar usuário:', 'erro: ', error)
    }
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
    </Templates>
  )
}
