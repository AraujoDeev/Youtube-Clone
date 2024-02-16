import Templates from '../../Components/Templates'
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
  return (
    <>
      <Templates>
        <Container>
          <Form>
            <h1 style={{ color: '#fff' }}>Login</h1>

            <ContainerInput>
              <Label htmlFor="email">Email </Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Ex: john.doe@example.com"
              />
            </ContainerInput>

            <ContainerInput>
              <Label htmlFor="password">Password </Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
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
