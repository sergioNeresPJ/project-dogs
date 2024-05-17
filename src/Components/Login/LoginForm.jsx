import React from 'react'
import Input from '../Form/Input'
import FormButton from '../Form/Button'
import styled, { keyframes } from 'styled-components'
import useForm from '../../Hooks/useForm'
import Error from '../ElementsInterface/Error'
import { UserContext } from '../../UserContext'
import { Link } from 'react-router-dom'

const anime_left = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

const Container = styled.section`
  padding-top: 4rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${anime_left} .3s forwards;
`

const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  z-index: 1;
  &::after{
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    border-radius: .2rem;
    z-index: -1;
    top: 6.2rem;
  }
`;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const LinkLostPassword = styled(Link)`
  display: inline-block;
  padding: 0.5rem 0;
  color: #666;
  line-height: 1;
  &::after{
    content: '';
    height: 2px;
    width: 100%;
    display: block;
    background: currentColor;
  }
`;

const ContainerRegister = styled.div`
  margin-top: 4rem;
`;

const TitleRegister = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;
  &::after{
    content:'';
    display: block;
    background: #ddd;
    height: .5rem;
    width: 3rem;
    border-radius: .2rem;
  }

`;

const TextRegister = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  background: #fb1;
  color: #764701;
  transition: 0.1s;
  min-width: 8rem;
  &:hover,
  &:focus{
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled{
    opacity: 50%;
    cursor: wait;
  }
`;

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);


  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form action='' onSubmit={handleSubmit}>
        <Input
          label="usuario"
          type="text"
          name='username'
          {...username}
        />
        <Input
          label="senha"
          type="password"
          name='password'
          {...password}
        />
        {loading ?
          <FormButton disabled>Carregando...</FormButton> :
          <FormButton>Entrar</FormButton>
        }
        <Error error={error} />
      </Form>
      <LinkLostPassword to="/login/perdeu">Perdeu a senha?</LinkLostPassword>
      <ContainerRegister>
        <TitleRegister>Cadastre-se</TitleRegister>
        <TextRegister>Ainda não possui conta?</TextRegister>
      </ContainerRegister>
      <Button to="/login/criar">Cadastro</Button>
    </Container>
  )
}

export default LoginForm