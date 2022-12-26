import styled from "styled-components";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Services/api"
import AuthContext from "../context/auth";
import nota from "../assets/images/nota.png"
import placa from "../assets/images/placa.png"
import backarrow from "../assets/images/backarrow.svg"
import { Input } from "../components/FormComponents/Input";
import { Button } from "../components/FormComponents/Button";
import api from "../Services/api";
import { Form } from "../components/FormComponents/Form";



export default function Plans() {
  const navigate = useNavigate()
  let location = useLocation()
  const [isLoading, setIsLoading] = useState(false);
  const [membershipsID,setMembershipsID] = useState([]);
  const {auth, setAuth}= React.useContext(AuthContext);
  const idPlan = parseInt(useParams().idPlan);
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }    
}
  const [formData, setFormData] = useState({ membershipId: idPlan, cardName: '', cardNumber: '', securityNumber: '', expirationDate: '' }); 


  useEffect(() => {
    axios.get(`${BASE_URL}/subscriptions/memberships/${idPlan}`, config)
    .then((res)=>setMembershipsID(res.data))
    .catch((err)=>console.log(err.response.data.message))
 })
  
    function handleChange(e) {
        let data = {...formData};
        if(e.target.name === "securityNumber") data[e.target.name]=parseInt(e.target.value);
        else data[e.target.name]=e.target.value
        setFormData(data);
      }
      

    function handleSubmit(e) {
        e.preventDefault();
        e.membershipID=idPlan;

        setIsLoading(true);
        const promise = api.SubscribePlan({
        ...formData
        }, config);

        promise.then((res) => {
        setIsLoading(false);
        let newAuth = {...auth}
        newAuth.membership=res.data.membership;
        setAuth(newAuth);
        navigate("/home");
        }).catch((err) => console.log(err.response.data.message));
        setIsLoading(false);
        console.log(formData)
    }


  return (
    <Container>
        <Header>
            <Link to="/">
                {location.pathname !== "/" && <BackArrow onClick={() => navigate(-1)} src={backarrow} alt="arrow"/>}
            </Link>
        </Header>
        <Signature>

            <Name>
                <img alt="DRIVEN +" src={membershipsID.image} />
                <h1>{membershipsID.name}</h1>
            </Name>
            <Detail>
                <img alt="placa" src={placa} />
                <span>Benefícios:</span>
                <ul>
                    <li>1. Brindes exclusivos</li>
                    <li>2. Materiais bônus de web</li>
                </ul>
                <img alt="nota" src={nota} />           
                <span>Preco:</span>
                <h1>R$ {membershipsID.price} cobrados mensalmente</h1>
            </Detail>

            <Form onSubmit={handleSubmit}>
                <Input
                type="text"
                placeholder="Nome impresso no cartão"
                name="cardName"
                onChange={handleChange}
                value={formData.cardName}
                disabled={isLoading}
                required
                />
                <Input
                type="text"
                placeholder="Digitos do cartão"
                name="cardNumber"
                onChange={handleChange}
                value={formData.cardNumber}
                disabled={isLoading}
                required
                />
                <Input
                type="text"
                placeholder="Código de segurança"
                name="securityNumber"
                onChange={handleChange}
                value={formData.securityNumber}
                disabled={isLoading}
                required
                />
                <Input
                type="text"
                placeholder="Validade"
                name="expirationDate"
                onChange={handleChange}
                value={formData.expirationDate}
                disabled={isLoading}
                required
                />
                <Button type="submit" disabled={isLoading}>
                ASSINAR
                </Button>    
            </Form>

        </Signature>

    </Container>
  )
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

export const Header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
    }
`

export const BackArrow = styled.img`
    width: 27px;
    margin-left: 8px;
    color: white;
    height: 40px;
    position: absolute;
    left: 15px;
    top: 15px;
    cursor: pointer;
`
export const Signature = styled.div`
    padding-top: 80px;
`

export const Name = styled.div`
    margin-left: 105px;
    margin-bottom: 22px;
    h1{
        font-weight: 700;
        font-size: 32px;
    }`

export const Detail = styled.div`
    margin-left: 40px;
    margin-bottom: 34px;
    font-weight: 400;
    font-size: 14px;
    ul{
        margin: 10px;
    }
    h1{
        margin-top: 4px;
    }
    img{
        margin-right: 5px;
    }`
