import React from 'react'
import SendIcon from '../../Assets/enviar.svg?react'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api';
import Error from '../ElementsInterface/Error'
import styled, { keyframes } from 'styled-components'

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: .5rem;
    border-radius: .2rem;
    background: #eee;
    transition: .2s;

    &:focus,
    &:hover{
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    }
`;

const Bark = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus svg path,/*Estilizando svg*/
    &:hover svg path{
        fill: #fea;
        stroke: #fb1;
    }

    &:focus svg g,/*Estilizando detalhe em svg*/
    &:hover svg g{
        animation: ${Bark} .6s infinite;
    }
`;


function PhotoCommentsForm({ id, setComments }) {
    const { request, error } = useFetch();
    const [comment, setComment] = React.useState('');

    

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment }, window.localStorage.getItem('token'));
        const { response, json } = await request(url, options);
        // console.log(json);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextArea
                id='comment'
                name='comment'
                placeholder='Insira seu comentário aqui...'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <Button>
                <SendIcon />
            </Button>
            <Error error={error} />
        </Form>
    )
}

export default PhotoCommentsForm