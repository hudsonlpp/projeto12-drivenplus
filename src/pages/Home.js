import styled from "styled-components";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export const Container = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #0E0E13;
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;`
  ;

