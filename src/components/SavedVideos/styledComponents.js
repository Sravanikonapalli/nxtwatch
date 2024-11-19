import styled from 'styled-components'

export const SavedCon = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`
export const TitleIconcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const VideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const VideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const Text = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 30px;
`
export const NoSavedView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const NoSavedImg = styled.img`
  width: 300px;
`
export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 30px;
`
export const NoSavedVideosPara = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
`
