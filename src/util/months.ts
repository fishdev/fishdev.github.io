import moment, { Moment } from 'moment';
import pluralize from 'pluralize';

import { MonthRange } from '../interfaces';

const LONG_FORMAT = 'MMMM YYYY';
const SHORT_FORMAT = 'MMMM';

export const computeDuration = (start: Moment, end: Moment): string => {
  const duration = moment.duration(end.diff(start));
  const months = pluralize('month', duration.months(), true);
  if (duration.years() === 0) return months;
  return pluralize('year', duration.years(), true) + ' and ' + months;
};

interface PrettyRange {
  start: string;
  end?: string;
  duration?: string;
}

export const computeRange = ({ start, end }: MonthRange): PrettyRange => {
  const startDate = moment()
    .month(start.month)
    .year(start.year);
  const pretty: PrettyRange = {
    start: startDate.format(LONG_FORMAT),
  };
  if (end) {
    if (end === 'Present') {
      pretty.end = end;
      pretty.duration = computeDuration(startDate, moment());
    } else {
      const endDate = moment()
        .month(end.month)
        .year(end.year);
      if (startDate.year() === endDate.year()) {
        pretty.start = startDate.format(SHORT_FORMAT);
      }
      pretty.end = endDate.format(LONG_FORMAT);
      pretty.duration = computeDuration(startDate, endDate);
    }
  }
  return pretty;
};
