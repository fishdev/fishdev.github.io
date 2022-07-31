import React from 'react';

import { Skill } from '../interfaces';
import { DropdownList } from '../../../base';
import { BlockBox, skillToBlock } from '../../core';
import { SkillTag } from './SkillTag';

export const SkillContainer: React.FC<Skill> = (props) => {
  return (
    <DropdownList
      dropup
      animated
      alignment="left"
      staticItems={[
        <div className="dropdown-item">
          <BlockBox {...skillToBlock(props, false)} isBox={false} />
        </div>,
      ]}>
      <SkillTag {...props} />
    </DropdownList>
  );
};
