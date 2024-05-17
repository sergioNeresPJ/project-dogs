import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate  } from 'react-router-dom';
import Dogs from '../../Assets/dogs.svg?react';
import UserIcon from '../../Assets/usuario.svg?react';
import { UserContext } from '../../UserContext';
import MyPhotosIcon from '../../Assets/feed.svg?react';
import LogoutIcon from '../../Assets/sair.svg?react';
import StatsIcon from '../../Assets/estatisticas.svg?react';


const HeaderContainer = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: white;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  max-width: 50rem;
  margin: 0 auto;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
`;

const DropdownItem = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr; /* Uma coluna para o ícone e outra para o texto */
  align-items: center; /* Alinha os itens verticalmente */
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  &:hover {
    background-color: #fb1;
  }
`;

const DropdownItemLogout = styled.button`
  display: grid;
  grid-template-columns: auto 1fr; /* Uma coluna para o ícone e outra para o texto */
  align-items: center; /* Alinha os itens verticalmente */
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fb1;
  }
`;

const DropdownItemText = styled.p`
  margin-left: 0.5rem; /* Adiciona um espaçamento entre o ícone e o texto */
  min-width: 5.5rem;
  text-align: left;
`;


const UserIconStyled = styled(UserIcon)`
  margin: 0 0.5rem;
  position: relative;
  top: -1.5px;
`;

function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();

  function handleLogout(){
    userLogout();
    navigate('/login');
  }

  useEffect(() => {
    let timer;
    if (!isMouseOver && isDropdownOpen) {
      timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 300); // Tempo de espera em milissegundos (300ms = 0.3s)
    }
    return () => clearTimeout(timer);
  }, [isMouseOver, isDropdownOpen]);

  return (
    <HeaderContainer>
      <NavBar>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <LoginContainer
          onMouseEnter={() => {
            setIsDropdownOpen(true);
            setIsMouseOver(true);
          }}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          {data ? (
            <>
              {data.nome}
              <UserIconStyled />
              <Dropdown style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <DropdownItem to="/conta">
                  <MyPhotosIcon/>
                  <DropdownItemText>Minha Conta</DropdownItemText>
                </DropdownItem>
                <DropdownItem to="/conta/estatisticas">
                  <StatsIcon/>
                  <DropdownItemText>Estatisticas</DropdownItemText>
                </DropdownItem>
                <DropdownItemLogout onClick={userLogout}>
                  <LogoutIcon/>
                  <DropdownItemText>Sair</DropdownItemText>
                </DropdownItemLogout>
              </Dropdown>
            </>
          ) : (
            <Link to='/login '>
              Login / Criar
              <UserIconStyled />
            </Link>
          )}
        </LoginContainer>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
