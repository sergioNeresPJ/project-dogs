import React from 'react'
import Input from '../Form/Input'
import FormButton from '../Form/Button'
import styled, { keyframes } from 'styled-components'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Error from '../ElementsInterface/Error'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom'

const anime_left = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

const Container = styled.section`
  padding-top: 4rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: ${anime_left} .3s forwards;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`


const InputPhotoSubmit = styled.input`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  
`;

const ContainerImgPreview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;
  &::after{
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(data) navigate('/conta');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const { url, options } = PHOTO_POST(formData, window.localStorage.getItem('token'));
    const response = await request(url, options);
    // console.log(response);
  }

  function handleImageChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input label='nome' type='text' name='nome' {...nome} />
        <Input label='peso' type='number' name='peso' {...peso} />
        <Input label='idade' type='number' name='idade' {...idade} />
        <InputPhotoSubmit type='file' name='img' id='img' onChange={handleImageChange} />
        {loading ? <FormButton disabled>Postando...</FormButton> : <FormButton>Postar</FormButton>}
        <Error error={error}/>
      </Form>
      <div>
        {img.preview &&
          <ContainerImgPreview style={{ backgroundImage: `url('${img.preview}')` }}>
          </ContainerImgPreview>}
      </div>
    </Container>
  )
}

export default UserPhotoPost