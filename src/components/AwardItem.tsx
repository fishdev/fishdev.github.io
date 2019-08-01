import React from 'react';

export const AwardItem: React.FC = ({ children }) => (
  <p className="award">
    <span className="icon has-text-warning">
      <i className="fas fa-award" />
    </span>
    <span>{children}</span>
  </p>
);
