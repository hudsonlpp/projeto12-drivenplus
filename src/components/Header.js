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
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > img {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  display: block;

  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

export {
  Container,
  Avatar,
};