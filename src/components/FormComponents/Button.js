import styled from "styled-components";

export const Button = styled.button`
  width: 299px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  
  /* cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
   */
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  
  background: #FF4791;
  color: #FFFFFF;
`;

