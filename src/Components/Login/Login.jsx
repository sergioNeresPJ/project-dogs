import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'
import styled from 'styled-components'
import image from '../../Assets/login.jpg'

const SectionLogin = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  gap: 2rem;
  &::before{
    content: '';
    display: block;
    background: url(${image}) no-repeat center center;
    background-size: cover;
  }
  @media(max-width:40rem){
    grid-template-columns: 1fr;
    &::before{
      display: none;
    }
  }
`;

const ContainerForms = styled.div`
  max-width: 30rem;
  padding: 1rem;
  @media(max-width:40rem){
    max-width: 100%;
  }
`;


function Login() {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to='/conta' />
  return (
    <SectionLogin>
      <ContainerForms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </ContainerForms>
    </SectionLogin>
  )
}

export default Login