import React from 'react';
import classNames from 'classnames';

import '../styles/mode-switcher.scss';
import { Mode } from '../interfaces';

interface Props {
  mode: Mode;
  setMode(mode: Mode): void;
  centered: boolean;
  showSearch?(): void;
  color: string;
}

export const ModeSwitcher = ({ mode, setMode, centered, showSearch, color }: Props) => (
  <div className="mode-switcher-container">
    <div className={classNames('buttons', 'has-addons', { 'is-centered': centered })}>
      <button
        className={classNames('button', `is-${color}`, { 'is-outlined': mode !== 'work' })}
        onClick={() => setMode('work')}>
        <span className={classNames('icon-text')}>
          <span className="icon">
            <i className="fas fa-briefcase"></i>
          </span>
          <span>Work Mode</span>
        </span>
      </button>
      <button
        className={classNames('button', `is-${color}`, { 'is-outlined': mode !== 'play' })}
        onClick={() => setMode('play')}>
        <span className={classNames('icon-text')}>
          <span className="icon">
            <i className="fas fa-shapes"></i>
          </span>
          <span>After Hours</span>
        </span>
      </button>
      {showSearch && (
        <button className={classNames('button', `is-${color}`, 'is-outlined')} onClick={showSearch}>
          <span className="icon">
            <i className="fas fa-search" />
          </span>
        </button>
      )}
    </div>
    {mode === 'work' && (
      <p>
        Look through my projects, experience, education info and more below. When you're done,
        switch to After Hours mode to explore my hobbies!
      </p>
    )}
    {mode === 'play' && (
      <p>
        Welcome to my life after work! Scroll down to see my photos and favorite stuff. Click Work
        Mode above if you need to get down to business.
      </p>
    )}
  </div>
);

ModeSwitcher.defaultProps = {
  centered: false,
  color: 'gradient',
};
