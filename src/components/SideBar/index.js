import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavBar,
  SideBarLgCon,
  NavOptions,
  SideLink,
  LinkContainer,
  Text,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ConatctPara,
  SideBarSmallContainer,
} from './styledComponents'

import CartContext from '../../context/CartContext'

class SideBar extends Component {
  renderTabItems = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('HomeRoute')
        }

        const onClickTabTrending = () => {
          changeTab('TrendingRoute')
        }

        const onClickTabGaming = () => {
          changeTab('GamingRoute')
        }

        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <SideBarLgCon>
              <NavOptions>
                <SideLink to="/">
                  <LinkContainer
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <IoMdHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Home</Text>
                  </LinkContainer>
                </SideLink>
                <SideLink to="/trending">
                  <LinkContainer
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <FaFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Trending</Text>
                  </LinkContainer>
                </SideLink>
                <SideLink to="/gaming">
                  <LinkContainer
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Gaming</Text>
                  </LinkContainer>
                </SideLink>
                <SideLink to="/saved-videos">
                  <LinkContainer
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <Text color={textColor}>Saved Videos</Text>
                  </LinkContainer>
                </SideLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ConatctPara color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ConatctPara>
              </ContactInfo>
            </SideBarLgCon>

            <SideBarSmallContainer bgColor={bgColor}>
              <SideLink to="/">
                <IoMdHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </SideLink>
              <SideLink to="/trending">
                <FaFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </SideLink>

              <SideLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </SideLink>

              <SideLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </SideLink>
            </SideBarSmallContainer>
          </NavBar>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default SideBar
