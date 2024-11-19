import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/CartContext'
import FailureView from '../FailureView'
import GamingCards from '../GamingCards'

import {
  GamingVideosList,
  GamingConatiner,
  GamingIconAndTitle,
  GamingIcon,
  GamingHeaidng,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <GamingVideosList>
        {gamingVideos.map(each => (
          <GamingCards key={each.id} videoDetails={each} />
        ))}
      </GamingVideosList>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.getVideos} />

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
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <SideBar />
              <GamingConatiner bgColor={bgColor} data-testid="gaming">
                <GamingIconAndTitle>
                  <GamingIcon>
                    <SiYoutubegaming size={35} color="ff0000" />
                  </GamingIcon>
                  <GamingHeaidng color={textColor}>Gaming</GamingHeaidng>
                </GamingIconAndTitle>
                {this.renderVideos()}
              </GamingConatiner>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamingRoute
