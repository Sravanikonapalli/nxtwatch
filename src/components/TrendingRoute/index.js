import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import {
  TrendingCon,
  TitleIconCon,
  Title,
  VideosList,
  Text,
  LoaderCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderCon className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderCon>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <VideosList>
        {trendingVideos.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </VideosList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <SideBar />
              <TrendingCon
                data-testid="trending"
                style={{backgroundColor: bgColor}}
                onClick={toggleTheme}
              >
                <Title>
                  <TitleIconCon>
                    <HiFire size={35} color="ff0000" />
                  </TitleIconCon>
                  <Text color={textColor}>Trending</Text>
                </Title>
                {this.renderVideos()}
              </TrendingCon>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default TrendingRoute
