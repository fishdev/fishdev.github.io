import React, { useState } from 'react';
import classNames from 'classnames';

import '../styles/mode-switcher.scss';
import { Mode } from '../interfaces';
import { ModeSwitcher } from './ModeSwitcher';
import { ResponsiveContainer } from './ResponsiveContainer';

interface Props {
  showSearch(): void;
  workChildren: React.ReactNode;
  playChildren: React.ReactNode;
}

export const ModeContainer = ({ showSearch, workChildren, playChildren }: Props) => {
  const [mode, setMode] = useState<Mode>('work');

  const heroColor = { work: 'gold', play: 'black' }[mode];
  const switcherColor = { work: 'gradient', play: 'gradient' }[mode];

  console.log(heroColor, switcherColor);

  return (
    <div className={classNames('hero', `is-${heroColor}`)}>
      <div className="hero-body">
        <div className="block is-large">
          <ResponsiveContainer size="medium">
            <ModeSwitcher
              color={switcherColor}
              mode={mode}
              setMode={setMode}
              showSearch={showSearch}
              centered></ModeSwitcher>
          </ResponsiveContainer>
        </div>
        {mode === 'work' && workChildren}
        {mode === 'play' && playChildren}
      </div>
    </div>
  );
};
