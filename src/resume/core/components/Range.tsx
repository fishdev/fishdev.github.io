import React from 'react';
import classNames from 'classnames';

import { MonthRange } from '../interfaces';
import { computeRange } from '../util';

interface Props extends MonthRange {
  showDuration?: boolean;
}

export class Range extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    showDuration: false,
  };

  render() {
    const { showDuration } = this.props;
    const { start, end, duration } = computeRange(this.props);
    return (
      <span className={classNames({ tooltip: duration && showDuration })} data-tooltip={duration}>
        {start}
        {end && ' — ' + end}
      </span>
    );
  }
}
