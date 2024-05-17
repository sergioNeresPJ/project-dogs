import React from 'react';
import EyeIcon from '../../Assets/visualizacao.svg';
import Image from '../ElementsInterface/Image';
import styled from 'styled-components';

const Photo = styled.li`
  display: grid;
  border-radius: .2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2n) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2n) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;


const PhotoVisualizations = styled.span`
  grid-area: 1/1;
  background: rgba(0, 0, 0, .3);
  font-size: 1rem;
  color: white;
  justify-content: center;
  align-items: center;
  display: none;
  text-align: center;

  ${Photo}:hover & {
    display: flex;
  }

  &::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: .25rem;
    background: url(${EyeIcon}) no-repeat;
  }
`;

function FeedPhotosItem({ photo, setModalPhoto }) {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Photo onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} /> {/* Utilizando o PhotoItem dentro de Photo */}
      <PhotoVisualizations>{photo.acessos}</PhotoVisualizations>
    </Photo>
  );
}

export default FeedPhotosItem;
