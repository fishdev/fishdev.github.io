import React from 'react';

import { Range } from './Range';
import { MonthRange, BlockEvent } from '../interfaces';

interface Props {
  range?: MonthRange;
  event?: BlockEvent;
}

export const RangeEventBar: React.FC<Props> = ({ range, event }) => (
  <div className="columns is-mobile is-variable is-2">
    {range && (
      <div className="column is-narrow">
        <Range {...range} />
      </div>
    )}
    {event && (
      <div className="column is-narrow">
        <a href={event.url}>{event.name}</a>
      </div>
    )}
  </div>
);
