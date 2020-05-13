import React from 'react';
import classNames from 'classnames';

import { getData } from '../../../data';
import { DropdownList } from '../../dropdown';

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
        <div className="footer-sections columns is-centered is-variable is-2">
          <div className="column is-narrow">
            <p>
              <small className="has-text-grey-light">
                &copy; Copyright {year}
                {showName ? (
                  <span>
                    {' '}
                    {getData().constants.fullName}.<br className="is-hidden-tablet" />
                  </span>
                ) : (
                  '.'
                )}
              </small>
            </p>
          </div>
          <div className="column is-narrow">
            <p>
              <small className="has-text-grey-light">
                Made in{' '}
                <a
                  className={classNames('has-text-grey-light', {
                    'tooltip has-tooltip-top': showImageCredit,
                  })}
                  href={getData().constants.locationUrl}
                  data-tooltip="Public domain image via Wikimedia Commons">
                  <strong>{getData().constants.location}</strong>
                </a>
              </small>
            </p>
          </div>
          {getData().links.more && (
            <div className="column is-narrow">
              <DropdownList dropup items={getData().links.more}>
                <a className="has-text-grey-light">
                  <span className="icon">
                    <i className="fas fa-ellipsis-h" />
                  </span>
                  <span className="is-hidden-tablet"> Other stuff</span>
                </a>
              </DropdownList>
            </div>
          )}
        </div>
      </div>
    );
  }
}
