import React from 'react'
import Input from '../Form/Input'
import Button from '../Form/Button'
import styled, { keyframes } from 'styled-components'
import useForm from '../../Hooks/useForm'
import Error from '../ElementsInterface/Error'
import { UserContext } from '../../UserContext'
import useFetch from '../../Hooks/useFetch'
import { USER_POST } from '../../api'

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

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const {loading, error, request} = useFetch();
  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit (event){
    event.preventDefault();
    if(username.validate() && email.validate() && password.validate()){
      const {url, options} = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const {response, json} = await request(url, options);
      // console.log(response);
      if(response.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form action='' onSubmit={handleSubmit}>
        <Input
          label="usuario"
          type="text"
          name='username'
          {...username}
        />
        <Input
          label="email"
          type="email"
          name='email'
          {...email}
        />
        <Input
          label="senha"
          type="password"
          name='password'
          {...password}
        />
        {loading ?
          <Button disabled>Cadastrando...</Button> :
          <Button>Cadastre-se</Button>
        }
        <Error error={error} />
      </Form>
    </Container>
  )
}

export default LoginCreate