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
        <div className="columns">
          <div
            className={classNames('column is-paddingless', {
              'is-8-tablet is-offset-2-tablet is-6-desktop is-offset-3-desktop is-4-fullhd is-offset-4-fullhd':
                size === 'medium',
              'is-8-desktop is-offset-2-desktop is-6-fullhd is-offset-3-fullhd': size === 'large',
            })}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
