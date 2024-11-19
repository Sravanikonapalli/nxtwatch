import {
  ItemLink,
  ListItem,
  ThumbnailImg,
  VideoDetails,
  ProfileImg,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </ItemLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
