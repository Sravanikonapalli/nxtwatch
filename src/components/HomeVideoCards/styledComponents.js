import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  width: 270px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Image = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const TitleAndNameAndViewsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const VideoName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding-right: 7px;
  padding-left: 7px;
`
