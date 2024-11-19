import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'

import VideoCard from '../VideoCard'

import {
  SavedCon,
  TitleIconcon,
  VideoTitle,
  VideoList,
  Text,
  NoSavedView,
  NoSavedImg,
  NoSavedHeading,
  NoSavedVideosPara,
} from './styledComponents'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      return (
        <>
          <Header />
          <SideBar />
          <SavedCon data-testid="savedVideos" bgColor={bgColor}>
            <VideoTitle>
              <TitleIconcon>
                <CgPlayListAdd size={35} color="#ff0000" />
              </TitleIconcon>
              <Text color={textColor}>Saved Videos</Text>
            </VideoTitle>
            {savedVideos.length > 0 ? (
              <VideoList>
                {savedVideos.map(each => (
                  <VideoCard key={each.id} videoDetails={each} />
                ))}
              </VideoList>
            ) : (
              <NoSavedView>
                <NoSavedImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading textColor={textColor}>
                  No saved videos found
                </NoSavedHeading>
                <NoSavedVideosPara textColor={textColor}>
                  You can save your videos while watching them.
                </NoSavedVideosPara>
              </NoSavedView>
            )}
          </SavedCon>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default SavedVideos
