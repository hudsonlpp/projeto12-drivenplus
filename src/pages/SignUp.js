import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "../components/FormComponents/Container";
import { Form } from "../components/FormComponents/Form";
import { Input } from "../components/FormComponents/Input";
import { Button } from "../components/FormComponents/Button";
import { StyledLink } from "../components/FormComponents/StyledLink";
import api from "../Services/api";


export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', name: '', cpf: '', password: '' }); 
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.signUp({
      ...formData
    });

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch((err) => console.log(err.response.data.message));{
      setIsLoading(false);
      alert('Erro, tente novamente');
    };
  }

  return (
    <Container>

    <Form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="cpf"
          name="cpf"
          onChange={handleChange}
          value={formData.cpf}
          disabled={isLoading}
          required
        />
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
          CADASTRAR
        </Button>
      </Form>

      <StyledLink to="/">
      Já possuí uma conta? Entre
      </StyledLink>
    </Container>
  );
}