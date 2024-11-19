import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBar from '../SideBar'

import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import CartContext from '../../context/CartContext'

import {
  HomeContainer,
  BannerContainer,
  BannerLeftNaveen,
  BannerImg,
  UlList,
  BannerText,
  BannerButton,
  BannerRightpart,
  BannnerCloseButton,
  SearchContainer,
  SearchIconContainer,
  SearchInput,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    homeVideos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloserBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  naveen = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessVideos = () => {
    const {homeVideos} = this.state
    return (
      <UlList>
        <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
      </UlList>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'felx' : 'none'
          return (
            <>
              <Header />
              <SideBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftNaveen>
                    <BannerImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt watch Premium prepaid plans with <br /> UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftNaveen>
                  <BannerRightpart>
                    <BannnerCloseButton
                      data-testid="close"
                      onClick={this.onCloserBanner}
                    >
                      <IoMdClose size={25} />
                    </BannnerCloseButton>
                  </BannerRightpart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    color={textColor}
                  />
                  <SearchIconContainer
                    data-testid="searchButton"
                    onClick={this.naveen}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchIconContainer>
                </SearchContainer>
                {this.renderVideos()}
              </HomeContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default HomeRoute
