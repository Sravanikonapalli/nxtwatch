import styled from 'styled-components'

export const NfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 95vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;  
  }
`
export const NfView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: none;
`
export const NfImage = styled.img`
  width: 300px;
`
export const NfHeading = styled.h1`
  color: ${props => props.headingColor}
  font-family: 'Roboto';
  font-size: 30px;
`
export const NfPara = styled.p`
  color: ${props => props.paraColor}
  font-family: 'Roboto';
  font-size: 30px;
`
