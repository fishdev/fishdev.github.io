import React from 'react';

import { Skill } from '../interfaces';
import { DropdownList } from './DropdownList';
import { BlockBox } from './BlockBox';
import { skillToBlock } from '../util';
import { SkillTag } from './SkillTag';

export const SkillContainer: React.FC<Skill> = props => {
  return (
    <DropdownList
      dropup
      alignment="is-left"
      staticItems={
        <div className="dropdown-item">
          <BlockBox {...skillToBlock(props, false)} isBox={false} />
        </div>
      }>
      <SkillTag {...props} />
    </DropdownList>
  );
};
