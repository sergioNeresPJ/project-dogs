import React from 'react'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';

const Button = styled.button`
    background: #ddd;
    padding: .3rem .6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: .875;
    cursor: pointer;
    border-radius: .4rem;
    transition: .1s;

    &:hover,
    &:focus{
        outline: none;
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
    
    &:disabled{
        opacity: 50%;
        cursor: wait;
    }
`;

function PhotoDelete({ text, id }) {
    const { loading, request } = useFetch();

    async function handleClick() {
        const confirm = window.confirm("Tem certeza que deseja deletar a foto?");
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id, window.localStorage.getItem('token'))
            const { response, json } = await request(url, options);
            if (response.ok) {
                window.location.reload();
            }
        }
    }

    return (
        <>
            {loading ?
                <Button disabled onClick={handleClick}>Deletando...</Button>
                :
                <Button onClick={handleClick}>{text}</Button>}

        </>
    )
}

export default PhotoDelete