import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  FormContainer,
  Logo,
  LabelAndInputcontainer,
  Label,
  Input,
  ShowHideContainer,
  CheckBox,
  ErrorMsg,
  Button,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    errorMsg: '',
    showSubmitError: false,
    username: '',
    password: '',
    showAndHide: false,
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitSucess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSucess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  showAndHidePassword = () => {
    this.setState(prev => ({showAndHide: !prev.showAndHide}))
  }

  render() {
    const {username, password, showAndHide, errorMsg, showSubmitError} =
      this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.submitForm}>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LabelAndInputcontainer>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChangeHandler}
            />
          </LabelAndInputcontainer>
          <LabelAndInputcontainer>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type={showAndHide ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChangeHandler}
            />
          </LabelAndInputcontainer>
          <ShowHideContainer>
            <CheckBox
              type="checkbox"
              checked={showAndHide}
              onChange={this.showAndHidePassword}
              id="show-password"
            />
            <Label htmlFor="show-password">Show Password</Label>
          </ShowHideContainer>
          <Button type="submit">Login</Button>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginRoute
