import React from 'react';
import classNames from 'classnames';

import { Skill } from '../interfaces';

interface Props extends Skill {
  isActive?: boolean;
  onClick?: () => void;
}

export const SkillTag: React.FC<Props> = ({ isActive, onClick, icon, name }) => (
  <a className={classNames('tag is-large', isActive ? 'is-light' : 'is-dark')} onClick={onClick}>
    <div className="columns is-variable is-2 is-mobile">
      {icon && (
        <div className="column is-narrow">
          <span className="icon">
            <i className={icon} />
          </span>
        </div>
      )}
      <div className="column fancy">{name}</div>
    </div>
  </a>
);