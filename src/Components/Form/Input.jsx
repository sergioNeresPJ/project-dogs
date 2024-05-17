import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const InputArea = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  background: #eee;
  transition: .12s;
  &:focus,
  &:hover{
    outline: none;
    border-color: #fe1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

const Label = styled.label`
  text-transform: capitalize;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  display: block;
  line-height: 1;
`;

const Erro = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: .25rem;
`

function Input({ name, label, type, value, onChange, onBlur, error }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputArea
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Erro>{error}</Erro>}
    </Container>
  )
}

export default Input