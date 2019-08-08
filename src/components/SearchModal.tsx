import React from 'react';
import classNames from 'classnames';

import { Search } from './Search';

interface Props {
  important: boolean;
  toggleImportant: () => void;
  hide: () => void;
}

export const SearchModal: React.FC<Props> = ({ important, toggleImportant, hide }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={hide} />
    <div className="search-container search-modal modal-content">
      <Search>
        <button
          className="button is-rounded is-outlined is-light tooltip"
          data-tooltip={important ? 'Show all' : 'Show only important'}
          onClick={toggleImportant}>
          <span className="icon">
            <i className={classNames('fas', important ? 'fa-list' : 'fa-star')} />
          </span>
        </button>
        <button className="button is-rounded is-outlined is-light is-hidden-mobile" onClick={hide}>
          <span className="icon">
            <i className="fas fa-times" />
          </span>
        </button>
      </Search>
    </div>
    <button className="modal-close is-large is-hidden-tablet" onClick={hide} />
  </div>
);
