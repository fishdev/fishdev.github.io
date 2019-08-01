import React from 'react';

export const AwardBox: React.FC = ({ children }) => (
  <article className="message is-warning">
    <div className="message-body">
      <div className="columns is-mobile is-vcentered">
        <div className="column is-narrow">
          <span className="icon is-large has-text-warning">
            <i className="fas fa-2x fa-award" />
          </span>
        </div>
        <div className="column">
          <h6 className="title is-6 fancy">{children}</h6>
        </div>
      </div>
    </div>
  </article>
);
