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
    background-color: #0E0E13;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 10;
    padding-bottom: 10px;
    `

    

