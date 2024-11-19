import styled from 'styled-components'

export const VideosLit = styled.ul`
  list-style-type: none;
  padding: 0;
  display: felx;
  flex-wrap: wrap;
  justify-content: flex-start;  
`
export const NoSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NovideosImg = styled.img`
  width: 300px;
`
export const Heading = styled.h1`
  color: ${props => props.textColor}
  font-size: 30px;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: ${props => props.textColor}
  font-size: 24px;
  font-family: 'Roboto';
`
export const RetryBtn = styled.button`
  border: none;
  background-color: #4746e5;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  font-family: 'Roboto';
`
