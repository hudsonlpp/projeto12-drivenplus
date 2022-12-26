import styled from "styled-components";
import Header from "../components/Header";
import { Button } from "../components/FormComponents/Button";
import { useState } from "react";

export default function Home() {
  const[perks,setPerks] = useState([]);

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/subscriptions/memberships`, config)
  //   .then((res)=>setPerks(res.data))
  //   .catch((err)=>console.log(err.response.data.message))
  // }, [])


  return (
    <Container>
      <Header />
      <h1>Olá, fulano</h1>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      {/* {memberships.map((e)=>(
          <Link key={e.id} to={e.Link}>
            <Button id={e.id}>{e.title}</Button>
          </Link>
        ))} */}
      <Footer>
        <Button>Mudar plano</Button>
        <Button className="red">Cancelar plano</Button>
      </Footer>
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
  font-size: 32px;
  h1{
    padding-top: 95px;
    font-family: 'Roboto';
    font-style: Bold;
    font-size: 24px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    margin-bottom: 53px;
  }
  Button{
      margin-bottom: 10px;
      margin-left: 40px;
    }
  `;

  export const Footer = styled.div`
    position: fixed;
      left: 0px;
      bottom: 0px;
    Button{
      margin-bottom: 10px;
    }
      `


