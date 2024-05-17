import React from 'react'
import styled, { keyframes } from 'styled-components';


const ContainerImage = styled.div`
    grid-area: 1/1;
    display: grid;
`;

const SkeletonAnimation = keyframes`
    from{
        background-position: 0px;
    }
    to{
        background-position: -200%;
    }
`

const SkeletonItem = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${SkeletonAnimation} 1.5s infinite;
`;

const ImageItem = styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: .2s;

`;

function Image({alt, ...props}) {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({target}){
        setSkeleton(false);
        target.style.opacity = 1;
    }

    return (
        <ContainerImage>
            {skeleton && <SkeletonItem/>}
            <ImageItem onLoad={handleLoad} alt={alt} {...props}/>
        </ContainerImage>
    )
}

export default Image