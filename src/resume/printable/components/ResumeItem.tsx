import React from 'react';

import { Block, rangeToString } from '../../core';

interface Props extends Block {
  showRange: boolean;
}

export const ResumeItem: React.FC<Props> = ({ name, tagline, showRange, range, resume }) => (
  <p className="print-paragraph">
    <strong>
      {resume!.name || name}
      {!resume!.name && tagline && ': ' + tagline}
      {resume!.extra && ', ' + resume!.extra}
    </strong>
    {showRange && <strong className="is-pulled-right">{range && rangeToString(range)}</strong>}
    {resume!.description && (
      <React.Fragment>
        <br />
        {resume!.description}
      </React.Fragment>
    )}
    {resume!.award && (
      <React.Fragment>
        <br />
        <span className="icon is-small has-text-primary">
          <i className="fas fa-star" />
        </span>
        &nbsp;
        {resume!.award}
      </React.Fragment>
    )}
  </p>
);
