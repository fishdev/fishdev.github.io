import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTopWithoutRouter extends React.PureComponent<RouteComponentProps> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => this.props.children || null;
}

export const ScrollToTop = withRouter(ScrollToTopWithoutRouter);
