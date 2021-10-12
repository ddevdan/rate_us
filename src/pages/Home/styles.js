import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  gap: 60px;
`;



export const HomeWraperTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;


export const FormWraper = styled.form`
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  gap: 30px;
`;


export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  color:white;
  width: 100px;
  background: #0D8384;
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-weight: bold;
  font-size:18px;
  cursor: pointer;
  &:hover:{
    background: #0D8384A8;
  }
`;

export const WrapButton = styled.div`
  width:100%;
  display:flex;
  justify-content: flex-start
`