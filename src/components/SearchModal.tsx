import React from 'react';

import { Search } from './Search';

interface Props {
  important: boolean;
  toggleImportant: () => void;
  hide: () => void;
}

export const SearchModal: React.FC<Props> = ({ hide }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="search-container search-modal modal-content">
      <Search />
    </div>
    <button className="modal-close is-large is-hidden-tablet" onClick={hide} />
  </div>
);
