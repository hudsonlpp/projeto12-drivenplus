import styled from "styled-components";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Container, Avatar } from "./style";
import carinha from "../../assets/images/carinha.png"
// import useAuth from "../../hooks/useAuth";
// import { pathsWithoutHeaderAndMenu } from "../../App";

export default function Header(props) {
//   const { auth } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   if (pathsWithoutHeaderAndMenu.includes(location.pathname)) {
//     return null;
//   }

  return (
    <Container>
      <Avatar src={props.image} alt="Group" />

      <img src={carinha} alt="carinha" />
    </Container>
  );
}

const Container = styled.header`
  padding-left: 38px;
  padding-right: 22px;
  padding-top: 32px;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  background-color: #0E0E13;

`;

const Avatar = styled.img`
  width: 80px;
  display: block;
  margin-top: 32px;

`;

export {
  Container,
  Avatar,
};