import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`
export const SideBarLgCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  width: 260px;
  top: 60px;
  position: fixed;
  height: 90%;
  @media screen and (max-width:768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 0;
  padding: 0;
  list-style-type: none;  
`
export const SideLink = styled(Link)`
  text-decoration: none;
`
export const LinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const Text = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 15px;
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px; 
  font-weight: bold; 
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 12px;
`
export const ConatctPara = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
`
export const SideBarSmallContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: ${props => props.bgColor}
  padding: 10px;
  align-items: center;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
