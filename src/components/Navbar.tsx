import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Portrait } from './Portrait';
import { FULL_NAME } from '../assets/data';
import { SocialButtons } from './SocialButtons';

interface Props {
  showMenu?: boolean;
  showName?: boolean;
  showButtons?: boolean;
  color?: string;
}

interface State {
  isActive: boolean;
}

export class Navbar extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    showMenu: true,
    showName: true,
    showButtons: true,
  };

  state: Readonly<State> = {
    isActive: false,
  };

  toggleActive = () => this.setState(({ isActive }) => ({ isActive: !isActive }));

  render() {
    const { showMenu, showName, showButtons, color } = this.props;
    const { isActive } = this.state;
    return (
      <nav className={classNames('navbar', { ['is-' + color]: color })}>
        <div className="container">
          <div className={classNames('navbar-brand', { 'navbar-item-centered': !showMenu })}>
            <span className="navbar-item fancy">
              <div className="columns is-variable is-2 is-mobile">
                <div className="column is-narrow">
                  <Portrait size="24x24" />
                </div>
                {showName && (
                  <div className="column">
                    <b>{FULL_NAME}</b>
                  </div>
                )}
              </div>
            </span>
            {showMenu && (
              <a
                className={classNames('navbar-burger', { 'is-active': isActive })}
                onClick={this.toggleActive}>
                <span />
                <span />
                <span />
              </a>
            )}
          </div>
          {showMenu && (
            <div className={classNames('navbar-menu', { 'is-active': isActive })}>
              <div className="navbar-end">
                <NavLink to="/" exact activeClassName="is-active" className="navbar-item">
                  Home
                </NavLink>
                <NavLink to="/about" exact activeClassName="is-active" className="navbar-item">
                  About
                </NavLink>
                <NavLink to="/resume" exact activeClassName="is-active" className="navbar-item">
                  Resume
                </NavLink>
                <NavLink to="/favorites" activeClassName="is-active" className="navbar-item">
                  Favorites
                </NavLink>
                {showButtons && (
                  <div className="navbar-item">
                    <SocialButtons size="small" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}
