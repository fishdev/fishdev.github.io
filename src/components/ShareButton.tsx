import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

import { HOSTING_URL } from '../assets/data';

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
    return (
      <CopyToClipboard text={url || HOSTING_URL + location.pathname} onCopy={this.wasCopied}>
        {type === 'button' ? (
          <button
            className={classNames(
              'button tooltip',
              { 'is-rounded': rounded },
              { 'has-text-success': copied }
            )}
            data-tooltip={copied ? 'Link copied!' : 'Share this'}>
            <span className="icon">
              <i className={'fas fa-' + (copied ? 'check' : 'share')} />
            </span>
          </button>
        ) : (
          <a className="dropdown-item">
            <span className="icon">
              <i className={'fas fa-' + (copied ? 'check' : 'share')} />
            </span>
            {copied ? 'Link copied!' : 'Share this'}
          </a>
        )}
      </CopyToClipboard>
    );
  }
}
