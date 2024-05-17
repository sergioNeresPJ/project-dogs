import React from 'react'
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import PhotoComments from './PhotoComments';
import EyeIcon from '../../Assets/visualizacao-black.svg'
import { UserContext } from '../../UserContext'
import PhotoDelete from './PhotoDelete';
import Image from '../ElementsInterface/Image'

const scaleUp = keyframes`
    to{
        opacity: initial;
        transform: initial;
    }
`

const Container = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: .2rem;
    background: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: ${scaleUp} .3s forwards;

    @media(max-width: 64rem){
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }
`;

const ContainerPhoto = styled.div`
    grid-row: 1/-1;
    display: grid;
    align-items: center;
    
    @media(max-width: 64rem){
        grid-row: 1;
    }
`;

const ContainerDetails = styled.div`
    padding: 2rem 2rem 0 2rem;
`

const LinkAuthorPhoto = styled.p`
    opacity: .5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:hover & {
        text-decoration: underline;
    }
`;

const TotalAcessPhoto = styled.span`
    &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: .5rem;
        background: url(${EyeIcon});
    }
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

const ContainerAttributes = styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const AttributesItem = styled.li`
    margin-right: 2rem;

    &::before{
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: .5rem;
        position: relative;
        top: 5px;
        width: 2px;
        background: #333;
        margin-top: 5px;
    }
`;

function PhotoContent({ data }) {
    const user = React.useContext(UserContext);
    const { photo, comments } = data;
    return (
        <Container>
            <ContainerPhoto>
                <Image src={photo.src} alt={photo.title}/> 
            </ContainerPhoto>
            <ContainerDetails>
                <LinkAuthorPhoto>
                    {user.data && user.data.username === photo.author ?
                        <PhotoDelete id={photo.id} text="Deletar"/>
                        :
                        <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                    }

                    <TotalAcessPhoto>{photo.acessos}</TotalAcessPhoto>
                </LinkAuthorPhoto>
                <Title>
                    <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                </Title>
                <ContainerAttributes>
                    <AttributesItem>{`${photo.peso} kg`}</AttributesItem>
                    <AttributesItem>{photo.idade == 1 ? `${photo.idade} ano` : `${photo.idade} anos`}</AttributesItem>
                </ContainerAttributes>
            </ContainerDetails>
            <PhotoComments id={photo.id} comments={comments} />
        </Container>
    )
}

export default PhotoContent