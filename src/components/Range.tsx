import React from 'react';
import classNames from 'classnames';

import { MonthRange } from '../interfaces';
import { computeRange } from '../util';

export const Range: React.FC<MonthRange> = range => {
  const { start, end, duration } = computeRange(range);
  return (
    <span className={classNames({ tooltip: duration })} data-tooltip={duration}>
      {start}
      {end && ' — ' + end}
    </span>
  );
};
