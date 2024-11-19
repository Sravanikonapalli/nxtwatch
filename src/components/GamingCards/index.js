import {
  ItemLink,
  ListItem,
  GamingImage,
  GamingTitle,
  GamingViews,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const GamingCards = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <ListItem>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle color={textColor}>{title}</GamingTitle>
              <GamingViews color={textColor}>
                {viewCount} Watching Worldwide
              </GamingViews>
            </ListItem>
          </ItemLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default GamingCards
