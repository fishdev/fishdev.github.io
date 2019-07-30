import React from 'react';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

interface Props {
  rounded: boolean;
  url?: string;
}

interface State {
  copied: boolean;
}

export class ShareButton extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    rounded: false,
    url: window.location.href,
  };

  state: Readonly<State> = {
    copied: false,
  };

  wasCopied = () =>
    this.setState({ copied: true }, () => setTimeout(() => this.setState({ copied: false }), 5000));

  render() {
    const { rounded, url } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={url!} onCopy={this.wasCopied}>
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
      </CopyToClipboard>
    );
  }
}
