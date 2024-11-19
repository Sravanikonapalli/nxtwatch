import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import {
  VideoPlayer,
  Title,
  VideoStatus,
  StatusContainer,
  Dot,
  Buttoncontainer,
  Button,
  BtnCon,
  BtnText,
  HrLine,
  ChanelImg,
  ChannelCon,
  ChannelInfo,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisLiked()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const iconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <Title color={textColor}>{videoDetails.title}</Title>
            <StatusContainer>
              <VideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <Dot> &#8226; </Dot> {videoDetails.publishedAt}
              </VideoStatus>
              <Buttoncontainer>
                <BtnCon>
                  <Button
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={30} />
                    <BtnText>Like</BtnText>
                  </Button>
                </BtnCon>
                <BtnCon>
                  <Button
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={30} />
                    <BtnText>Dislike</BtnText>
                  </Button>
                </BtnCon>
                <BtnCon>
                  <Button type="button" color={iconColor} onClick={onClickSave}>
                    <BiListPlus size={30} />
                    <BtnText> {isSaved ? 'Saved' : 'Save'} </BtnText>
                  </Button>
                </BtnCon>
              </Buttoncontainer>
            </StatusContainer>
            <HrLine />
            <ChannelCon>
              <ChanelImg
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <Subscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </Subscribers>
                <Description color={textColor}>
                  {videoDetails.description}
                </Description>
              </ChannelInfo>
            </ChannelCon>
          </VideoPlayer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default PlayVideoView
