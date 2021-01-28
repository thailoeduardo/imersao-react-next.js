import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-position: center;
  background-size: cover;
`;

export const QuizContainer = styled.div`
  border: 1px solid #1c1c1c;
  background-color: rgba(255, 255, 255, 0.5);
  width: 400px;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  /* max-width: 500; */
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>My App</QuizContainer>

      <Widget>Texto</Widget>
    </BackgroundImage>
  );
}
