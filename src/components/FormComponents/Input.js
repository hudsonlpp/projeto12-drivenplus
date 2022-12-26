import styled from "styled-components";

export const Input = styled.input`
  width: 299px;
  height: 52px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  /* pointer-events: ${(props) => props.disabled ? "none" : "all"};
  
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"}; */

  &::placeholder{
    color: #7E7E7E;
;
  }
`;

