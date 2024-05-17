import React from 'react'
import useFetch from '../../Hooks/useFetch'
import styled from 'styled-components'
import Error from '../ElementsInterface/Error'
import Loader from '../ElementsInterface/Loader/Loader';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const ContainerModal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0,.4);
    z-index: 1000;
    top: 0px;
    left: 0px;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
    @media(max-width: 40rem){   
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }

`;

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();


  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);


  return (
    <ContainerModal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loader />}
      {data && <PhotoContent data={data} />}
    </ContainerModal>
  )
}

export default FeedModal