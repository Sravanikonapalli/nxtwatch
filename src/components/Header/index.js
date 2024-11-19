import {Link, withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'
import {FiSun, FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {
  NavHeader,
  WebsiteLogo,
  CotentContainer,
  // ContentListItem,
  ThemeButton,
  ProfileImage,
  LogOutButton,
  ModalContainer,
  //AlignColumn,
  ModalDesc,
  ButtonsContainer,
  //CloseAndConfirmButtons,
  CloseButton,
  ConfirmButton,
  LogOutIconButton,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const Header = props => {
  return (
    <CartContext.Consumer>
      {value => {
        const {toggleTheme, isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const onChangeTheme = () => {
          toggleTheme()
        }

        const onClickLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <CotentContainer>
              <ThemeButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {isDarkTheme ? <FiSun /> : <BsMoon />}
              </ThemeButton>

              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogOutButton type="button" data-testid="iconButton">
                    Logout
                  </LogOutButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogOutIconButton type="button">
                    <FiLogOut size={35} color={textColor} />
                  </LogOutIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </CotentContainer>
          </NavHeader>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
