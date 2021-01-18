import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

class ScrollToTop extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps: Readonly<RouteComponentProps>) {
    if (prevProps.location !== this.props.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
