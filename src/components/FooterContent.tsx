import React from 'react';
import classNames from 'classnames';

interface Props {
  showName: boolean;
  showImageCredit: boolean;
}

export class FooterContent extends React.PureComponent<Props> {
  static defaultProps: Props = {
    showName: false,
    showImageCredit: false,
  };

  render() {
    const { showName, showImageCredit } = this.props;
    const year = new Date().getFullYear();
    return (
      <div className="container footer-content has-text-centered">
        <p>
          <small className="has-text-grey-light">
            &copy; Copyright {year}{' '}
            {showName && (
              <span>
                Ashwin Srinivasan <br className="is-hidden-tablet" />
              </span>
            )}
            <span className={classNames({ 'is-hidden-mobile': showName })}>| </span>
            Made in{' '}
            <a
              className={classNames('has-text-grey-light', { tooltip: showImageCredit })}
              href="https://www.visitpittsburgh.com"
              data-tooltip="Public domain image via Wikimedia Commons">
              <strong>Pittsburgh, PA</strong>
            </a>
          </small>
        </p>
      </div>
    );
  }
}
