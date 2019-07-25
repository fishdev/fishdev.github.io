import React from 'react';
import classNames from 'classnames';

interface Props {
  centered?: boolean;
  size: 'medium' | 'large';
}

export class ResponsiveContainer extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    centered: false,
  };

  render() {
    const { centered, size, children } = this.props;
    return (
      <div className={classNames('container', { 'has-text-centered': centered })}>
        <div className="columns is-centered">
          <div
            className={classNames('column is-paddingless', {
              'is-6-tablet is-5-desktop is-4-widescreen is-3-fullhd': size === 'medium',
              'is-8-desktop is-6-fullhd': size === 'large',
            })}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
