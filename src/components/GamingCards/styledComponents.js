import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  list-style-type: none;
  background: none;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const GamingImage = styled.img`
  width: 280px;
  align-self: right;
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`
export const GamingViews = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
`
