import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import { Element as ScrollElement } from 'react-scroll';

import { Block } from '../interfaces';
import { SearchModal } from './SearchModal';
import { Education } from '../../education';
import { ResumeCore } from './ResumeCore';
import { Skills } from '../../skills';

interface State {
  searchActive: boolean;
  importantOnly: boolean;
}

export class Resume extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    searchActive: false,
    importantOnly: false,
  };

  showSearch = () => this.setState({ searchActive: true });
  hideSearch = () => this.setState({ searchActive: false });

  toggleImportant = () =>
    this.setState(({ importantOnly }) => ({ importantOnly: !importantOnly }), this.hideSearch);

  filterBlocks = (blocks: Block[]): Block[] =>
    this.state.importantOnly ? blocks.filter((block) => !block.unimportant) : blocks;

  render() {
    const { searchActive } = this.state;
    return (
      <ScrollElement name="resume">
        <GlobalHotKeys
          keyMap={{ SHOW_SEARCH: '/', TOGGLE_IMPORTANT: 'i' }}
          handlers={{
            SHOW_SEARCH: this.showSearch,
            TOGGLE_IMPORTANT: this.toggleImportant,
          }}
        />
        {searchActive && <SearchModal hide={this.hideSearch} />}
        <Education showSearch={this.showSearch} />
        <ResumeCore />
        <Skills />
      </ScrollElement>
    );
  }
}
