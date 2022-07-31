import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import { Element as ScrollElement } from 'react-scroll';

import { Block } from '../interfaces';
import { SearchModal } from '../../search';
import { Education } from '../../education';
import { ResumeCore } from './ResumeCore';
import { Skills } from '../../skills';
import { ModeSwitcher, ResponsiveContainer } from '../../../base';

interface State {
  importantOnly: boolean;
}

export class Resume extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    importantOnly: false,
  };

  toggleImportant = () => this.setState(({ importantOnly }) => ({ importantOnly: !importantOnly }));

  filterBlocks = (blocks: Block[]): Block[] =>
    this.state.importantOnly ? blocks.filter((block) => !block.unimportant) : blocks;

  render() {
    return (
      <ScrollElement name="resume">
        <GlobalHotKeys
          keyMap={{ TOGGLE_IMPORTANT: 'i' }}
          handlers={{
            TOGGLE_IMPORTANT: this.toggleImportant,
          }}
        />
        <div className="block is-large">
          <div className="container is-max-tablet">
            <ResumeCore />
          </div>
        </div>
        <div className="block is-large">
          <div className="container is-max-tablet">
            <Education />
          </div>
        </div>
      </ScrollElement>
    );
  }
}
