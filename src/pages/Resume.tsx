import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';

import { Block } from '../interfaces';
import { ImportantToggle } from '../components/ImportantToggle';
import { SearchModal } from '../components/SearchModal';
import { Education } from '../components/Education';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { blocks } from '../assets/data';
import { BlockHeader } from '../components/BlockHeader';
import { Section } from '../components/Section';
import { Skills } from '../components/Skills';

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
    this.state.importantOnly ? blocks.filter(block => !block.unimportant) : blocks;

  render() {
    const { searchActive, importantOnly } = this.state;
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
        {searchActive && (
          <SearchModal hide={this.hideSearch}>
            <ImportantToggle
              type="button"
              important={importantOnly}
              toggle={this.toggleImportant}
            />
          </SearchModal>
        )}
        <Education showSearch={this.showSearch} />
        <div className="hero is-black is-medium">
          <div className="hero-body">
            <ResponsiveContainer size="medium">
              {blocks.map(({ name, data }) => (
                <Section key={name} name={name}>
                  {data.map(block => (
                    <div className="block-header">
                      <BlockHeader hasMore {...block} />
                    </div>
                  ))}
                </Section>
              ))}
            </ResponsiveContainer>
          </div>
        </div>
        <Skills />
      </div>
    );
  }
}
