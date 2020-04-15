import React from 'react';

import { blocks } from '../../../assets/data';
import { ResponsiveContainer } from '../../../core';
import { Section } from './Section';
import { BlockHeader } from './BlockHeader';
import { OvalSwitcher } from './OvalSwitcher';

export const ResumeCore: React.FC = () => (
  <React.Fragment>
    <div className="hero is-black is-medium is-hidden-touch">
      <div className="hero-body">
        <ResponsiveContainer size="huge">
          <OvalSwitcher />
        </ResponsiveContainer>
      </div>
    </div>
    <div className="hero is-black is-medium is-hidden-desktop">
      <div className="hero-body">
        <ResponsiveContainer size="medium">
          {blocks.map(({ name, data }) => (
            <Section key={name} name={name}>
              {data.map((block) => (
                <div className="block-header">
                  <BlockHeader hasMore {...block} />
                </div>
              ))}
            </Section>
          ))}
        </ResponsiveContainer>
      </div>
    </div>
  </React.Fragment>
);
