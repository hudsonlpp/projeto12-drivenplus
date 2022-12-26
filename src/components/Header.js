import styled from "styled-components";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Container, Avatar } from "./style";
import Group from "../assets/images/Group.png"
import carinha from "../assets/images/carinha.png"
// import useAuth from "../../hooks/useAuth";
// import { pathsWithoutHeaderAndMenu } from "../../App";

export default function Header() {
//   const { auth } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   if (pathsWithoutHeaderAndMenu.includes(location.pathname)) {
//     return null;
//   }

  return (
    <Container>
      <img src={Group} alt="Group" />

      <Avatar src={carinha} alt="carinha" />
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

  background: black;

  & > img {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  display: block;

  width: 34px;
  border-radius: 50%;
`;

export {
  Container,
  Avatar,
};