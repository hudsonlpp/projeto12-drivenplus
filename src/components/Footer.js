import styled from "styled-components"
import { Button } from "./FormComponents/Button"

export default function Footer() {
    return (
        <FooterContainer>
            <Button>Mudar plano</Button>
            <Button>Cancelar plano</Button>
        </FooterContainer>
    );
}

 export const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    `