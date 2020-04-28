import React from 'react';

import data from '../../../assets/data';

export const Header: React.FC = () => (
  <div className="has-text-centered fancy">
    <h3 className="title">
      {data.constants.fullName}
      <div className="colorbar" />
    </h3>
    <h5 className="subtitle is-6">
      <span>
        <span className="icon">
          <i className="fas fa-map-marker-alt" />
        </span>
        <span> {data.constants.location}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-envelope" />
        </span>
        <span> {data.constants.email}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-globe" />
        </span>
        <span> {data.constants.hostingDomain}</span>
      </span>
    </h5>
  </div>
);
