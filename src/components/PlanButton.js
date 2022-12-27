import styled from "styled-components";

export default function PlanButton(props) {
    return(
        <StyledButton>
            <img alt="DRIVEN +" src={props.image} />
            <h1>R$ {props.price}</h1>
        </StyledButton> 
    )
}

export const StyledButton = styled.button`
    width: 290px;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 43px;

    img{
        width: 139.38px;
        height: 95.13px;
    }

    h1{
        color: #ffffff;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        margin-left: 20px;
        text-decoration: none;
    }
`;

