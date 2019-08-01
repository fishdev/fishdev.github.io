import React from 'react';
import { HotKeys } from 'react-hotkeys';

import { filterEntities, courseToBlock, skillToBlock } from '../util';
import { Entity, Block, Course, Skill } from '../interfaces';
import { BlockBox } from './BlockBox';

interface Props {
  hide: () => void;
}

interface State {
  search: string;
}

export class SearchModal extends React.PureComponent<Props> {
  private searchInput: HTMLInputElement | null = null;

  state: Readonly<State> = {
    search: '',
  };

  componentDidMount() {
    this.searchInput!.focus();
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ search: event.target.value });

  searchResults = (): React.ReactNode[] => {
    const results = filterEntities(this.state.search).map((entity: Entity) => {
      switch (entity.type) {
        case 'coursework':
          return <BlockBox {...courseToBlock(entity.data as Course)} />;
        case 'projects':
        case 'experience':
        case 'activities':
          return <BlockBox {...entity.data as Block} hasMore={true} />;
        case 'skills':
          return <BlockBox {...skillToBlock(entity.data as Skill)} />;
      }
    });
    return results;
  };

  render() {
    const { hide } = this.props;
    const { search } = this.state;
    const results = this.searchResults();
    return (
      <HotKeys handlers={{ HIDE_SEARCH: hide }}>
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="search-container modal-content">
            <div className="search-box columns is-mobile is-vcentered is-variable is-1">
              <div className="column">
                <div className="field">
                  <div className="control has-icons-left">
                    <input
                      ref={input => (this.searchInput = input)}
                      className="input is-large"
                      type="text"
                      value={search}
                      onChange={this.handleSearchChange}
                      placeholder="Type to search..."
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="column is-narrow">
                <button className="delete is-large" onClick={hide} />
              </div>
            </div>
            {search.length >= 2 &&
              (results.length > 0 ? (
                results
              ) : (
                <div className="has-text-centered">
                  <span className="tag is-medium is-danger">
                    <span>Sorry, no results</span>
                    <span className="icon">
                      <i className="far fa-frown" />
                    </span>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </HotKeys>
    );
  }
}
