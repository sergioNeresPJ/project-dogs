import React from 'react';
import styled from 'styled-components';
import AddIcon from './AddIcon'

const FloatingActionButtonContainer = styled.button`
  position: absolute; /* Alterado para fixed */
  bottom: 1.5rem; /* Colocado no canto inferior */
  right: .5rem; /* Colocado no limite máximo à direita */
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
  margin: 0 1rem;
  border-radius: 50%;
  background-color: #eee; 
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  z-index: 10; /* Definido z-index como um valor muito grande */

  &:hover {
    background-color: #fb1;
  }
`;

function FloatingActionButton({ size }) {
  const halfSize = `${parseFloat(size) / 1.5}rem`;

  return (
    <FloatingActionButtonContainer size={size} aria-label="add" >
      <AddIcon size={halfSize} />
    </FloatingActionButtonContainer>
  );
}

export default FloatingActionButton;
