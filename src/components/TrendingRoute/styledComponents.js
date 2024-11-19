import styled from 'styled-components'

export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const TrendingCon = styled.div`
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
export const TitleIconCon = styled.div`
  width: 40px;
  height: 40px;
  border-radies: 20px;
  margin-left: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.color};
`
export const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
