import React from 'react'
import Feed from '../Feed/Feed'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 4rem;
`;

function Home() {
  return (
    <Container>
      <Feed />
    </Container>
  )
}

export default Home