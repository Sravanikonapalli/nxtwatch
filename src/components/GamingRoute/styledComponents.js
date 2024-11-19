import styled from 'styled-components'

export const GamingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const GamingConatiner = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingIconAndTitle = styled.div`
  width: 40px;
  height: 40px;
  border-radies: 20px;
  margin-left: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingIcon = styled.img`
  width: 120px;
`
export const GamingHeaidng = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.color};
`
