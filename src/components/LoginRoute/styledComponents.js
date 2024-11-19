import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;  
`
export const Logo = styled.img`
  width: 100px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const LabelAndInputcontainer = styled.div`
  display: flex;
  flex-direction: column;  
`
export const Label = styled.label`
  padding-bottom: 8px;
  font-family: 'Roboto';
  font-size: 15px;
  padding-top: 5px;
`
export const Input = styled.input`
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #475568;
`
export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const CheckBox = styled.input`
  margin-right: 7px;
  font-size: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 25px;
  font-family: 'Roboto';
  padding-top: 7px;
`
export const Button = styled.button`
  border-radius: 12px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
`
