import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const paraColor = isDarkTheme ? 'e2e8f0' : '#475569'
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureImage src={imageUrl} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara paraColor={paraColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailurePara>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default FailureView
