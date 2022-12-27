import styled from "styled-components";
import Header from "../components/HomeComponents/Header";
import { Button } from "../components/FormComponents/Button";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth";
import axios from "axios";
import { BASE_URL } from "../Services/api";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom"

export default function Home() {
  const[perks,setPerks] = useState([]);
  const[im,setIm] = useState([]);
  const {auth, setAuth}= useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }    
}
console.log(auth)
  useEffect(() => {
    axios.get(`${BASE_URL}/subscriptions`, config)
    .then((res)=>setPerks(res.data.perks))
    .catch((err)=>console.log(err.response.data.message))
  }, [])

  useEffect(() => {
    axios.get(`${BASE_URL}/subscriptions`, config)
    .then((res)=>setIm(res.data))
    .catch((err)=>console.log(err.response.data.message))
  }, [])


  return (
    <Container>
      <Header image={im.image}/>
      <h1>Olá, {auth.name}</h1>
      {perks.map((e)=>(
          <a key={e.id} href={e.link}>
            <Button id={e.id} path={e.link}>{e.title}</Button>
          </a>
        ))}
      <Footer>
        <Button>Mudar plano</Button>
        <RedButton>Cancelar plano</RedButton>
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
    padding-top: 105px;
    font-family: 'Roboto';
    font-style: Bold;
    font-size: 24px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    margin-bottom: 53px;
  }
  a{
    text-decoration: none;
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
  export const RedButton = styled(Button)`
    background: #FF4747;
  `
