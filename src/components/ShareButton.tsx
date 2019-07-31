import React from 'react';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

interface Props {
  type?: 'button' | 'dropdown';
  rounded?: boolean;
  url?: string;
}

interface State {
  copied: boolean;
}

export class ShareButton extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    type: 'button',
    rounded: false,
    url: window.location.href,
  };

  state: Readonly<State> = {
    copied: false,
  };

  wasCopied = () =>
    this.setState({ copied: true }, () => setTimeout(() => this.setState({ copied: false }), 5000));

  render() {
    const { type, rounded, url } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={url!} onCopy={this.wasCopied}>
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
