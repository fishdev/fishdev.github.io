import React, { useState } from 'react';

import { getData } from '../../../data';
import { ResponsiveContainer } from '../../../base';
import { Section } from './Section';
import { BlockHeader } from './BlockHeader';
import { OvalSwitcher } from './OvalSwitcher';
import { Sticky } from 'react-sticky';
import classNames from 'classnames';
import { HoverBlockDisplay } from './HoverBlockDisplay';

export const ResumeCore = () => {
  const [section, setSection] = useState(0);

  return (
    <React.Fragment>
      <div className="columns">
        <div className="column">
          {getData().resume.blocks[section].data.map((block) => (
            <div className="block-header" key={block.id}>
              <HoverBlockDisplay
                {...block}
                inverted={getData().resume.blocks[section].name == 'experience'}
              />
            </div>
          ))}
        </div>
        <div className="column is-narrow section-box-column">
          <div className={classNames('box gradient-box')}>
            <div className="gradient-box-body">
              {getData().resume.blocks.map(({ name }, i) => (
                <h3 className="title is-3 gradientbg" key={name}>
                  <a
                    className={section === i ? 'has-text-weight-bold' : 'has-text-weight-medium'}
                    onClick={() => setSection(i)}>
                    {name.toUpperCase()}
                  </a>
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
