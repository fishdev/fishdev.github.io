import React from 'react';
import { withRouter, Link, RouteComponentProps, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

interface Props extends RouteComponentProps, LinkProps {}

@(withRouter as any)
export class TabLink extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {};

  render() {
    const { location, to } = this.props;
    return (
      <li className={classNames({ 'is-active has-text-black': location.pathname === to })}>
        <Link {...this.props} />
      </li>
    );
  }
}
