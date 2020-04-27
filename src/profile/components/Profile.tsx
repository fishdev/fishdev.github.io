import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Portrait, SocialButtons } from '../../base';
import { FULL_NAME, universities } from '../../assets/data';

interface Props {
  showPortrait: boolean;
  showColorbar: boolean;
  showButtons: boolean;
}

export class Profile extends React.PureComponent<Props> {
  static defaultProps: Props = {
    showPortrait: true,
    showColorbar: false,
    showButtons: false,
  };

  render() {
    const { showPortrait, showColorbar, showButtons, children } = this.props;
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div>
          {showPortrait && (
            <nav className="level">
              <div className="level-item has-text-centered">
                <Portrait />
              </div>
            </nav>
          )}
          <h3 className="title">
            {FULL_NAME}
            {showColorbar && (
              <span>
                <br />
                <div className="colorbar" />
              </span>
            )}
          </h3>
          <h5 className="subtitle">{universities[0].name}</h5>
          {showButtons && <SocialButtons />}
          {children}
        </div>
      </ScrollAnimation>
    );
  }
}
