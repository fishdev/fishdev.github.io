import React from 'react';

export const LevelGroup: React.FC = ({ children }) => (
  <nav className="level">
    <div className="level-item">
      <div className="field is-grouped">
        {React.Children.map(children, child => (
          <div className="control">{child}</div>
        ))}
      </div>
    </div>
  </nav>
);
