import Driven_white from "../assets/images/Driven_white.png"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "../components/FormComponents/Container";
import { Form } from "../components/FormComponents/Form";
import { Input } from "../components/FormComponents/Input";
import { Button } from "../components/FormComponents/Button";
import { StyledLink } from "../components/FormComponents/StyledLink";
import api from "../Services/api";
import useAuth from "../context/useAuth";


export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token){
      console.log(auth)
      if (auth.membership){
        navigate("/home")
      } else {
        navigate("/subscriptions")
      }
    }
  
  }, [auth,navigate]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.login({ ...formData });
    promise.then((response) => {
      setIsLoading(false);

      login(response.data);
      navigate("/today");
    });
    promise.catch(() => {
      setIsLoading(false);

      alert('Erro, tente novamente');
    });
  }


  return (
    <Container>
      
      <img alt="DRIVEN +" src={Driven_white} />

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
			ENTRAR
        </Button>
      </Form>

      <StyledLink to="/sign-up">
        Não tem uma conta? Cadastre-se!
      </StyledLink>
    </Container>
  );
}