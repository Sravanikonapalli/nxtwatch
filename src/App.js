import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'HomeRoute',
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state

    return (
      <CartContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
