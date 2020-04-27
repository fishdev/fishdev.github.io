import React from 'react';
import classNames from 'classnames';

interface Props {
  centered?: boolean;
  size: 'medium' | 'large' | 'huge';
}

const SIZES = {
  medium: 'is-8-tablet is-6-widescreen is-5-fullhd',
  large: 'is-8-desktop is-6-fullhd',
  huge: 'is-10-fullhd',
};

export class ResponsiveContainer extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    centered: false,
  };

  render() {
    const { centered, size, children } = this.props;
    return (
      <div className="container">
        <div className={classNames('columns is-centered', { 'has-text-centered': centered })}>
          <div className={classNames('column', SIZES[size])}>{children}</div>
        </div>
      </div>
    );
  }
}
