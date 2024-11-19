import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  top:0;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const LogOutIconButton = styled.button`
  border: 1px none;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none
  }
`
export const WebsiteLogo = styled.img`
  width: 60px;
  margin-left: 10px;
  margin-right: 10px;
`
export const CotentContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
// export const ContentListItem = styled.li`
//   display: flex;
// `
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  color: ${props => props.color};
  cursor: pointer;
  margin-right: 10px;
`
export const ProfileImage = styled.img`
  width: 50px;  
  margin-right: 10px;
`
export const LogOutButton = styled.button`
  background-color: ${props => props.bgColor};
  font-size: 15px;
  border-radius: 10px;
  width: 140px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`
// export const AlignColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `
export const ModalDesc = styled.p`
  color: black;
  margin: 10px;
  font-size: 20px;
  font-family: 'Roboto';
`
export const CloseAndConfirmButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  color: grey;
  border: 1px solid grey;
  font-size: 15px;
  border-radius: 10px;
  width: 140px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-size: 15px;
  border-radius: 10px;
  width: 140px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  height: 40px;
`
