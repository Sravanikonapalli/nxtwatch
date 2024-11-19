import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`
export const ThumbnailImg = styled.img`
  width: 300px;
`
export const VideoDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: flex-start;
`
export const Title = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
`
export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
`
export const ViewsAndDate = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
`
export const Dot = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
