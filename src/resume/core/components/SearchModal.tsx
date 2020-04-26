import React from 'react';

import { Search } from './Search';
import { GlobalHotKeys } from 'react-hotkeys';

interface Props {
  hide: () => void;
}

export const SearchModal: React.FC<Props> = ({ hide, children }) => (
  <GlobalHotKeys keyMap={{ HIDE_MODAL: 'esc' }} handlers={{ HIDE_MODAL: hide as any }}>
    <div className="modal is-active">
      <div className="modal-background" onClick={hide} />
      <div className="search-container search-modal modal-content">
        <div className="animated faster fadeInUp">
          <Search>
            {children}
            <button className="delete is-large is-hidden-mobile" onClick={hide}>
              <span className="icon">
                <i className="fas fa-times" />
              </span>
            </button>
          </Search>
        </div>
      </div>
      <button className="modal-close is-large is-hidden-tablet" onClick={hide} />
    </div>
  </GlobalHotKeys>
);
