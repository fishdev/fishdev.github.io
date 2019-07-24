import React from 'react';

export const LevelGroup: React.FC = ({ children }) => (
  <nav className="level">
    <div className="level-item">
      <div className="field is-grouped">
        {React.Children.map(children, child => (
          <p className="control">{child}</p>
        ))}
      </div>
    </div>
  </nav>
);
