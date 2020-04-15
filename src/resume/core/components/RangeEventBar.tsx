import React from 'react';

import { Range } from './Range';
import { MonthRange, BlockEvent } from '../interfaces';

interface Props {
  range?: MonthRange;
  event?: BlockEvent;
}

export const RangeEventBar: React.FC<Props> = ({ range, event }) => (
  <p>
    {range && <Range showDuration {...range} />}
    {event && (
      <React.Fragment>
        &nbsp;&nbsp;&nbsp;
        <a href={event.url}>{event.name}</a>
      </React.Fragment>
    )}
  </p>
);
