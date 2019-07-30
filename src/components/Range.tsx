import React from 'react';
import moment, { Moment } from 'moment';

import { MonthRange, Month } from '../interfaces';

const MONTH_FORMAT = 'MMMM YYYY';

export const Range: React.FC<MonthRange> = ({ start, end }) => {
  return (
    <span>
      {moment()
        .month(start.month)
        .year(start.year)
        .format(MONTH_FORMAT)}
      {end &&
        ' — ' +
          (end === 'Present'
            ? end
            : moment()
                .month((end as Month).month)
                .year((end as Month).year)
                .format(MONTH_FORMAT))}
    </span>
  );
};
