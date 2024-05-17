import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styled from 'styled-components'

const ContainerComments = styled.ul`
    overflow-y: auto;
    word-break: break-word;
    padding: .2rem;
    margin: 0 1rem;

    & li{
        margin-bottom: .5rem;
        line-height: 1.2;
    }
`;

const DateComment = styled.span`
    font-size: .7rem;
    color: #484848;
`

function PhotoComments(props) {
    const [comments, setComments] = React.useState(() => props.comments)
    const commentsSection = React.useRef(null);
    const { login } = React.useContext(UserContext)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
        return formattedDate;
    };

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ContainerComments ref={commentsSection}>
                {comments.map((comment) =>
                (<li key={comment.comment_ID}>
                    <DateComment>{formatDate(comment.comment_date)}</DateComment>
                    <br/>
                    <b>{`${comment.comment_author}: `}</b>
                    <span>{comment.comment_content}</span>
                </li>))}
            </ContainerComments>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments