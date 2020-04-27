import React from 'react';

export const LoadingBox: React.FC = () => (
  <div className="has-text-centered">
    <div className="box has-background-dark" style={{ width: 100 }}>
      <span className="has-text-grey">Loading...</span>
    </div>
  </div>
);
