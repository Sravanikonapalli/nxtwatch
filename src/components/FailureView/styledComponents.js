import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const FailureImage = styled.img`
  width: 300px;
`
export const FailureHeading = styled.h1`
  color: ${props => props.headingColor};
  text-align: center;
  font-size: 30px;
  font-family: 'Roboto';
`
export const FailurePara = styled.p`
  color: ${props => props.paraColor};
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  background-color: #4746e5; 
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto';
  border: none;
  border-radius: 10px;
  padding: 10px;
`
