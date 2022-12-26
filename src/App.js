import styled from "styled-components";
import { GlobalStyle } from "./Styles/GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plan from "./pages/Plan";
import Plans from "./pages/Plans";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/auth";

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
      <GlobalStyle />
          <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/subscriptions" element={<Plan/>}></Route>
          <Route path="/subscriptions/:idPlan" element={<Plans/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export const Body = styled.div`
  background-color: #0E0E13;
`;
