import {
  VideosLit,
  NoSearchResults,
  NovideosImg,
  Heading,
  Paragraph,
  RetryBtn,
} from './styledComponents'

import CartContext from '../../context/CartContext'

import HomeVideoCards from '../HomeVideoCards'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

        return videosCount > 0 ? (
          <VideosLit>
            {homeVideos.map(eaach => (
              <HomeVideoCards key={eaach.id} homeVideoDetails={eaach} />
            ))}
          </VideosLit>
        ) : (
          <NoSearchResults>
            <NovideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading textColor={textColor}>No Search results found</Heading>
            <Paragraph textColor={textColor}>
              Try different keywords or remove search filter
            </Paragraph>
            <RetryBtn type="button" onClick={onClickRetry}>
              Retry
            </RetryBtn>
          </NoSearchResults>
        )
      }}
    </CartContext.Consumer>
  )
}

export default HomeVideos
