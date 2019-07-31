import React from 'react';
import Helmet from 'react-helmet';
import { HotKeys } from 'react-hotkeys';
import { Link as ScrollLink } from 'react-scroll';

import { SearchModal } from '../components/SearchModal';
import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { blocks } from '../assets/data';
import { Education } from '../components/Education';
import { Section } from '../components/Section';
import { BlockBox } from '../components/BlockBox';
import { Skills } from '../components/Skills';
import { Profile } from '../components/Profile';
import { LevelGroup } from '../components/LevelGroup';

interface State {
  searchActive: boolean;
}

export class Resume extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    searchActive: false,
  };

  showSearch = () => this.setState({ searchActive: true });
  hideSearch = () => this.setState({ searchActive: false });

  render() {
    const { searchActive } = this.state;
    return (
      <div>
        <Helmet>
          <title>Resume | Ashwin Srinivasan</title>
        </Helmet>
        <HotKeys keyMap={{ SHOW_SEARCH: '/', HIDE_SEARCH: 'esc' }}>
          <HotKeys handlers={{ SHOW_SEARCH: this.showSearch }}>
            {searchActive && <SearchModal hide={this.hideSearch} />}
            <section className="hero is-black">
              <div className="hero-head">
                <Navbar showName={false} showButtons={false} />
              </div>
              <div className="hero-body fancy">
                <ResponsiveContainer centered={true} size="medium">
                  <Profile showPortrait={false} showColorbar={true}>
                    <LevelGroup>
                      <a className="has-text-white" onClick={this.showSearch}>
                        <span className="icon">
                          <i className="fas fa-search" />
                        </span>
                        &nbsp;
                        <span>Search</span>
                      </a>
                      <a href={process.env.PUBLIC_URL + '/resume.pdf'} className="has-text-white">
                        <span className="icon">
                          <i className="fas fa-file-download" />
                        </span>
                        &nbsp;
                        <span>Download PDF</span>
                      </a>
                    </LevelGroup>
                  </Profile>
                </ResponsiveContainer>
              </div>
              <div className="hero-foot fancy">
                <nav className="tabs is-small is-centered">
                  <div className="container">
                    <ul>
                      <li>
                        <ScrollLink to="education" smooth={true} offset={-10}>
                          Education
                        </ScrollLink>
                      </li>
                      {blocks.map(section => (
                        <li key={section.name}>
                          <ScrollLink to={section.name} smooth={true} offset={-10}>
                            {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                          </ScrollLink>
                        </li>
                      ))}
                      <li>
                        <ScrollLink to="skills" smooth={true} offset={-10}>
                          Skills
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </section>
            <section className="section">
              <ResponsiveContainer size="large">
                <Education />
                {blocks.map(section => (
                  <Section key={section.name} name={section.name}>
                    {section.data.map(block => (
                      <BlockBox key={block.id} {...block} />
                    ))}
                  </Section>
                ))}
                <Skills />
              </ResponsiveContainer>
            </section>
          </HotKeys>
        </HotKeys>
      </div>
    );
  }
}
