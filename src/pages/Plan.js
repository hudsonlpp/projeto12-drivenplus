import styled from "styled-components";
import PlanButton from "../components/PlanButton";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Services/api"
import AuthContext from "../context/auth";
import { Link } from "react-router-dom";

export default function Plan() {

  const [memberships,setMemberships] = useState([]);
  const {auth}= React.useContext(AuthContext);
  const config = {
      headers: { Authorization: `Bearer ${auth.token}` }    
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/subscriptions/memberships`, config)
    .then((res)=>setMemberships(res.data))
    .catch((err)=>console.log(err.response.data.message))
  }, [])

  if(memberships === undefined){
    return <div>carregando...</div>
  }

  return (
    <StyledDiv>
      <h2>Escolha seu Plano</h2>
          {memberships.map((e)=>(
          <Link style={{textDecoration: 'none'}} key={e.id} to={`/subscriptions/${e.id}`}>
            <PlanButton image={e.image} price={e.price}/>
        </Link>
        ))}
    </StyledDiv>
  );
}

export const StyledDiv = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #0E0E13;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;


  h2{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 32px;  
  }
`;