import React from 'react'
import LoaderItem from './LoaderItem';
import styled from 'styled-components'


const ReactLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoadingText = styled.h2`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
`;

function Loader() {
    return (
        <ReactLoadingContainer>
            <LoaderItem />
            <LoadingText>Carregando...</LoadingText>
        </ReactLoadingContainer>
    )
}

export default Loader