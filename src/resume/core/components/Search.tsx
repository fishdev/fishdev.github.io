import React from 'react';

import { filterEntities, courseToBlock, skillToBlock } from '../util';
import { Entity, Block } from '../interfaces';
import { Course } from '../../education';
import { Skill } from '../../skills';
import { BlockBox } from './BlockBox';

interface State {
  search: string;
}

export class Search extends React.PureComponent<{}, State> {
  private searchInput: HTMLInputElement | null = null;

  state: Readonly<State> = {
    search: '',
  };

  componentDidMount() {
    setTimeout(() => this.searchInput!.focus(), 50);
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ search: event.target.value });

  searchResults = (): React.ReactNode[] => {
    const results = filterEntities(this.state.search).map((entity: Entity) => {
      switch (entity.type) {
        case 'coursework':
          return <BlockBox {...courseToBlock(entity.data as Course)} />;
        case 'skills':
          return <BlockBox {...skillToBlock(entity.data as Skill)} />;
        default:
          return <BlockBox {...(entity.data as Block)} hasMore={true} />;
      }
    });
    return results;
  };

  render() {
    const { children } = this.props;
    const { search } = this.state;
    const results = this.searchResults();
    return (
      <div>
        <div className="search-box columns is-mobile is-vcentered is-variable is-1">
          <div className="column">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  ref={(input) => (this.searchInput = input)}
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
          {React.Children.map(children, (child) => (
            <div className="column is-narrow">{child}</div>
          ))}
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
        <br />
      </div>
    );
  }
}
