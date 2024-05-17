import React from 'react'
import styled from 'styled-components'

const ErrorMessage = styled.p`
  color: #f31;
  font-size: 1.25rem;
  margin: 1rem 0;
`

function Error({ error }) {
    if (!error) return null
    return (
        <ErrorMessage>{error}</ErrorMessage>
    )
}

export default Error