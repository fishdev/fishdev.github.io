import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTopWithoutRouter extends React.PureComponent<RouteComponentProps> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(ScrollToTopWithoutRouter);
