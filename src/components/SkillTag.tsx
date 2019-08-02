import React from 'react';

import { Skill } from '../interfaces';
import { DropdownList } from './DropdownList';
import { BlockBox } from './BlockBox';
import { skillToBlock } from '../util';

export const SkillTag: React.FC<Skill> = props => {
  const { name, icon } = props;
  return (
    <DropdownList
      dropup
      alignment="is-left"
      staticItems={
        <div className="dropdown-item">
          <BlockBox {...skillToBlock(props, false)} isBox={false} />
        </div>
      }>
      <a className="tag is-medium">
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
    </DropdownList>
  );
};
