import {Link} from 'react-router-dom'
import {
  List,
  Image,
  VideoDetails,
  ProfileImg,
  TitleAndNameAndViewsCon,
  Title,
  VideoName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import CartContext from '../../context/CartContext'

import './index.css'

const HomeVideoCards = props => {
  const {homeVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = homeVideoDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <List>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <TitleAndNameAndViewsCon>
                  <Title color={textColor}>{title}</Title>
                  <VideoName color={textColor}>{name}</VideoName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} Views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </TitleAndNameAndViewsCon>
              </VideoDetails>
            </List>
          </Link>
        )
      }}
    </CartContext.Consumer>
  )
}

export default HomeVideoCards
