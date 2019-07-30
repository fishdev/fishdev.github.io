import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Portrait } from './Portrait';
import { LevelGroup } from './LevelGroup';
import { SocialButton } from './SocialButton';
import { social } from '../assets/data';

interface Props {
  showName: boolean;
  showButtons: boolean;
}

interface State {
  isActive: boolean;
}

export class Navbar extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    showName: true,
    showButtons: true,
  };

  state: Readonly<State> = {
    isActive: false,
  };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    const { showName, showButtons } = this.props;
    const { isActive } = this.state;
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item fancy">
              <div className="columns is-variable is-2 is-mobile">
                <div className="column is-narrow">
                  <Portrait size="24x24" />
                </div>
                {showName && (
                  <div className="column">
                    <b>Ashwin Srinivasan</b>
                  </div>
                )}
              </div>
            </span>
            <a
              className={classNames('navbar-burger', { 'is-active': isActive })}
              onClick={this.toggleActive}>
              <span />
              <span />
              <span />
            </a>
          </div>
          <div className={classNames('navbar-menu', { 'is-active': isActive })}>
            <div className="navbar-end">
              <NavLink to="/" exact activeClassName="is-active" className="navbar-item">
                Home
              </NavLink>
              <NavLink to="/resume" exact activeClassName="is-active" className="navbar-item">
                Resume
              </NavLink>
              <NavLink to="/spotify" activeClassName="is-active" className="navbar-item">
                Spotify
              </NavLink>
              {showButtons && (
                <div className="navbar-item">
                  <LevelGroup>
                    {social.map(item => (
                      <SocialButton key={item.name} size="is-small" {...item} />
                    ))}
                  </LevelGroup>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
