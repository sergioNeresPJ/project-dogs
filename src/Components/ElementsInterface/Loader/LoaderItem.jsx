import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderCircle = styled.div`
  border: 5px solid #f3f3f3;     /* cor do border */
  border-top: 5px solid #fb1; /* cor do border quando em rotação */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  text-align: center;
`;

function LoaderItem() {
  return (
    <Container>
      <LoaderCircle />
    </Container>
  );
}

export default LoaderItem;
