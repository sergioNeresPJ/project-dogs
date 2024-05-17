import React from 'react'
import useFetch from '../../Hooks/useFetch'
import styled, { keyframes } from 'styled-components';
import FeedPhotosItem from './FeedPhotosItem'
import { PHOTOS_GET } from '../../api';
import Error from '../ElementsInterface/Error'
import Loader from '../ElementsInterface/Loader/Loader';

const anime_left = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

const ContainerPhotos = styled.ul`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${anime_left} .3s forwards;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  @media(max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr); 
  }
`;

function FeedPhotos({page, user, setModalPhoto, setInfinite}) {
  const { data, loading, error, request } = useFetch();


  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos();
  }, [user, request, page, setInfinite]);

  if (error) return <Error error={error} />
  if (loading) return <Loader />
  if (data)
    return (
      <ContainerPhotos>
        {data.map(photo => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ContainerPhotos>
    )
  return null;
}

export default FeedPhotos