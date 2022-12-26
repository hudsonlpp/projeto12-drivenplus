import styled from "styled-components";

export default function Name(props) {
    return(
        <StyledButton>
            <img alt="DRIVEN +" src={props.image} />
            <h1 name={props.name}>name</h1>
        </StyledButton> 
    )
}

export const StyledButton = styled.button`

`
