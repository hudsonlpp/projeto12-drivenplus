import styled from "styled-components";
import Header from "../components/Header";
import { Button } from "../components/FormComponents/Button";
import React, { useState, useEffect } from "react";
import AuthContext from "../context/auth";
import axios from "axios";
import { BASE_URL } from "../Services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const[perks,setPerks] = useState([]);
  const {auth}= React.useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }    
}
console.log(auth)
  useEffect(() => {
    axios.get(`${BASE_URL}/subscriptions`, config)
    .then((res)=>setPerks(res.data))
    .catch((err)=>console.log(err.response.data.message))
  }, [])


  return (
    <Container>
      <Header />
      <h1>Olá, fulano</h1>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      {/* {perks.map((e)=>(
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


