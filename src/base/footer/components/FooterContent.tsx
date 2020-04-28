import React from 'react';
import classNames from 'classnames';

import { getData } from '../../../data';

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
                {getData().constants.fullName} <br className="is-hidden-tablet" />
              </span>
            )}
            <span className={classNames({ 'is-hidden-mobile': showName })}>| </span>
            Made in{' '}
            <a
              className={classNames('has-text-grey-light', { tooltip: showImageCredit })}
              href={getData().constants.locationUrl}
              data-tooltip="Public domain image via Wikimedia Commons">
              <strong>{getData().constants.location}</strong>
            </a>
          </small>
        </p>
      </div>
    );
  }
}
