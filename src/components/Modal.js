import styled from "styled-components";
import close from "../assets/images/close.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Services/api";
import { useParams } from "react-router-dom"
import AuthContext from "../context/auth";
import React from "react";
import { FaWindowClose } from "react-icons/fa";


export default function Modal({ setModal, planName, planPrice, handleSubmit }) {
  // const [memberships,setMemberships] = useState([]);
//   const idPlan = parseInt(useParams().idPlan);
//   const {auth, setAuth}= React.useContext(AuthContext);

//   const config = {
//     headers: { Authorization: `Bearer ${auth.token}` }    
// }

//   useEffect(() => {
//     axios.get(`${BASE_URL}/subscriptions/memberships/${idPlan}`, config)
//     .then((res)=>setMemberships(res.data))
//     .catch((err)=>console.log(err.response.data.message))
//  })
  return (
    <ModalContainer>
      <FaWindowClose className="Xis" color={"white"} size={32} onClick={() => setModal(false)}/>
      <Popup>
        <p>
          Tem certeza que deseja assinar o plano {planName} (R$ {planPrice})?
        </p>
        <div>
          <button onClick={() => setModal(false)}>Não</button>
          <button onClick={handleSubmit}>SIM</button>
        </div>
      </Popup>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .Xis{
    position: absolute;
    top: 22px;
    right: 22px;
  }
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 248px;
  height: 210px;
  background-color: #fff;
  border-radius: 12px;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000;
    margin-top: 33px;
  }
  div {
    display: flex;
    gap: 14px;
    margin-bottom: 11px;
    button {
      border: none;
      width: 95px;
      height: 52px;
      background: #ff4791;
      border-radius: 8px;
      font-size: 14px;
      line-height: 16px;
      color: #fff;
      :active {
        background-color: #fb2d7f;
        font-size: 16px;
        font-weight: 700;
      }
    }
    button:first-child {
      background-color: #cecece;
      :active {
        background-color: #aaa9a9;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;
