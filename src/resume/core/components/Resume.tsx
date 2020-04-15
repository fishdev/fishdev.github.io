import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';

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
      <div>
        <GlobalHotKeys
          keyMap={{ SHOW_SEARCH: '/', HIDE_SEARCH: 'esc', TOGGLE_IMPORTANT: 'i' }}
          handlers={{
            SHOW_SEARCH: this.showSearch,
            HIDE_SEARCH: this.hideSearch,
            TOGGLE_IMPORTANT: this.toggleImportant,
          }}
        />
        {searchActive && <SearchModal hide={this.hideSearch} />}
        <Education showSearch={this.showSearch} />
        <ResumeCore />
        <Skills />
      </div>
    );
  }
}