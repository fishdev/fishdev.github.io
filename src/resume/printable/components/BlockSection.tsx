import React from 'react';

import { Block } from '../../core';
import { ResumeItem } from '../components';

interface Props {
  blocks: Block[];
  showRanges: boolean;
}

export const BlockSection: React.FC<Props> = ({ blocks, showRanges }) => (
  <div>
    {blocks
      .filter((block) => block.resume)
      .sort((a, b) => a.resume!.ord - b.resume!.ord)
      .map((block) => (
        <ResumeItem key={block.id} {...block} showRange={showRanges} />
      ))}
  </div>
);
