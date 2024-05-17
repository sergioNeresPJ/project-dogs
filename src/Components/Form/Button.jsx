import React from 'react'
import styled from 'styled-components'

const ButtonItem = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  background: #fb1;
  color: #764701;
  transition: 0.1s;
  min-width: 8rem;
  &:hover,
  &:focus{
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled{
    opacity: 50%;
    cursor: wait;
  }
`;

function Button({children , ...props}) {
  return (
    <ButtonItem {...props}>{children}</ButtonItem>
  )
}

export default Button