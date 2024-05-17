import React from 'react';
import styled from 'styled-components';

const AddIconContainer = styled.svg`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
`;

function AddIcon({ size }) {
  return (
    <AddIconContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      size={size}
    >
      <path
        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" // Caminho do ícone sem o círculo
        fill="#000000" // Cor de preenchimento do ícone
      />
    </AddIconContainer>
  );
}

export default AddIcon;
