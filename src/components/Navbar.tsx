import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Portrait } from '../components/Portrait';
import { SocialButton } from '../components/SocialButton';
import { social } from '../assets/data';

interface State {
  isActive: boolean;
}

export class Navbar extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isActive: false,
  };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
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
                <div className="column">
                  <strong>Ashwin Srinivasan</strong>
                </div>
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
              <NavLink to="/spotify" activeClassName="is-active" className="navbar-item">
                Spotify
              </NavLink>
              <div className="navbar-item">
                <div className="field is-grouped">
                  {social.map(item => (
                    <SocialButton key={item.name} size="is-small" {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
