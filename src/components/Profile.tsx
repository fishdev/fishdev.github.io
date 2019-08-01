import React from 'react';

import { social } from '../assets/data/social';
import { Portrait } from './Portrait';
import { LevelGroup } from './LevelGroup';
import { Button } from './Button';

interface Props {
  showPortrait: boolean;
  showColorbar: boolean;
}

export class Profile extends React.PureComponent<Props> {
  static defaultProps: Props = {
    showPortrait: true,
    showColorbar: false,
  };

  render() {
    const { showPortrait, showColorbar, children } = this.props;
    return (
      <div>
        {showPortrait && (
          <nav className="level">
            <div className="level-item has-text-centered">
              <Portrait />
            </div>
          </nav>
        )}
        <h3 className="title">
          Ashwin Srinivasan
          {showColorbar && (
            <span>
              <br />
              <div className="colorbar" />
            </span>
          )}
        </h3>
        <h5 className="subtitle">Carnegie Mellon University</h5>

        <LevelGroup>
          {social.map(item => (
            <Button key={item.name} {...item} />
          ))}
        </LevelGroup>
        {children}
      </div>
    );
  }
}
