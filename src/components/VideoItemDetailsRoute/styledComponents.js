import styled from 'styled-components'

export const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background-color: ${props => props.bgColor}
  height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0;
  }
`
