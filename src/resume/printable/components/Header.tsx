import React from 'react';

import { FULL_NAME, LOCATION, EMAIL, HOSTING_DOMAIN } from '../../../assets/data';

export const Header: React.FC = () => (
  <div className="has-text-centered fancy">
    <h3 className="title">
      {FULL_NAME}
      <div className="colorbar" />
    </h3>
    <h5 className="subtitle is-6">
      <span>
        <span className="icon">
          <i className="fas fa-map-marker-alt" />
        </span>
        <span> {LOCATION}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-envelope" />
        </span>
        <span> {EMAIL}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-globe" />
        </span>
        <span> {HOSTING_DOMAIN}</span>
      </span>
    </h5>
  </div>
);
