import React from 'react';

import { getData } from '../../../data';

export const Header: React.FC = () => (
  <div className="has-text-centered fancy">
    <h3 className="title">
      {getData().constants.fullName}
      <div className="colorbar" />
    </h3>
    <h5 className="subtitle is-6">
      <span>
        <span className="icon">
          <i className="fas fa-map-marker-alt" />
        </span>
        <span> {getData().constants.location}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-envelope" />
        </span>
        <span> {getData().constants.email}</span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        <span className="icon">
          <i className="fas fa-globe" />
        </span>
        <span> {getData().constants.hostingDomain}</span>
      </span>
    </h5>
  </div>
);
