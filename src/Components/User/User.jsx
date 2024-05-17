import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserStats from './UserStats'
import UserPhotoPost from './UserPhotoPost'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import FloatingActionButton from '../ElementsInterface/FloatingActionButton'
import { UserContext } from '../../UserContext'

const Container = styled.section`
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 4rem;
  max-width: 50rem;
  height: 100vh;
  position: relative;
`

function User() {
  const {data} = React.useContext(UserContext);

  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
      <Link to='/conta/postar'>
        <FloatingActionButton size={'4rem'} />
      </Link>
    </Container>
  )
}

export default User