import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'

import {
  NfContainer,
  NfView,
  NfImage,
  NfHeading,
  NfPara,
} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const paraColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const nfImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <SideBar />
          <NfContainer bgColor={bgColor}>
            <NfView>
              <NfImage src={nfImageUrl} alt="not found" />
              <NfHeading headingColor={headingColor}>Page Not Found</NfHeading>
              <NfPara paraColor={paraColor}>
                We are sorry, the page you requested could not be found.
              </NfPara>
            </NfView>
          </NfContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
