import { useState } from 'react'
import Templates from '../../Components/Templates'
import { useAuth } from '../../context/AuthProvider/useAuth'
import {
  Button,
  Container,
  ContainerInput,
  FacebookIcon,
  Form,
  GoogleIcon,
  Input,
  Label,
  Medias,
  Paragraph,
  TwitterIcon,
} from './login'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const auth = useAuth()

  async function onFinish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await auth.authenticate(form.email, form.password)
    } catch (err) {
      console.log(err)
    }
    setForm({ email: '', password: '' })
  }

  return (
    <>
      <Templates>
        <Container>
          <Form onSubmit={(e) => onFinish(e)}>
            <h1 style={{ color: '#fff' }}>Login</h1>

            <ContainerInput>
              <Label htmlFor="email">Email </Label>
              <Input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="text"
                id="email"
                name="email"
                value={form.email}
                placeholder="Ex: john.doe@example.com"
              />
            </ContainerInput>

            <ContainerInput>
              <Label htmlFor="password">Password </Label>
              <Input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={form.password}
              />
            </ContainerInput>

            <Button type="submit">Log in</Button>

            <Paragraph>Or Sign Up Using</Paragraph>

            <Medias>
              <FacebookIcon title="indisponivel" />
              <GoogleIcon title="indisponivel" />
              <TwitterIcon title="indisponivel" />
            </Medias>
          </Form>
        </Container>
      </Templates>
    </>
  )
}

export default Login
