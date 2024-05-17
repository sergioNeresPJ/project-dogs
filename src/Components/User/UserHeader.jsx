import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'


const Header = styled.header`
  
`;

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

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
        
    }
  }, [location]);

  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  )
}

export default UserHeader