import React from 'react';
import classNames from 'classnames';

import { Skill } from '../interfaces';

interface Props extends Skill {
  isActive?: boolean;
  onClick?: () => void;
}

export const SkillTag: React.FC<Props> = ({ isActive, onClick, icon, name }) => (
  <a className={classNames('tag is-medium', { 'is-dark': isActive })} onClick={onClick}>
    <div className="columns is-variable is-1 is-mobile">
      {icon && (
        <div className="column is-narrow">
          <span className="icon">
            <i className={icon} />
          </span>
        </div>
      )}
      <div className="column">{name}</div>
    </div>
  </a>
);
