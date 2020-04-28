import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

import data from '../../../assets/data';

interface Props extends RouteComponentProps {
  type?: 'button' | 'dropdown';
  rounded?: boolean;
  url?: string;
}

interface State {
  copied: boolean;
}

@(withRouter as any)
export class ShareButton extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    type: 'button',
    rounded: false,
  };

  state: Readonly<State> = {
    copied: false,
  };

  wasCopied = () =>
    this.setState({ copied: true }, () => setTimeout(() => this.setState({ copied: false }), 5000));

  render() {
    const { type, rounded, url, location } = this.props;
    const { copied } = this.state;
    const icon = (
      <span className={classNames('icon', { 'animated bounceIn': copied })}>
        <i className={'fas fa-' + (copied ? 'clipboard-check' : 'link')} />
      </span>
    );
    return (
      <CopyToClipboard
        text={url || data.constants.hostingUrl + location.pathname}
        onCopy={this.wasCopied}>
        {type === 'button' ? (
          <button
            className={classNames(
              'button is-outlined is-small',
              { 'is-rounded': rounded },
              copied ? 'is-success' : 'is-white'
            )}>
            {icon}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        ) : (
          <a className="dropdown-item">
            {icon}
            &nbsp; &nbsp;
            {copied ? 'Copied!' : 'Copy Link'}
          </a>
        )}
      </CopyToClipboard>
    );
  }
}
