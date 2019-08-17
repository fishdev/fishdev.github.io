import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Helmet from 'react-helmet';
import { GlobalHotKeys } from 'react-hotkeys';

import { scrollProps } from '../util';
import { Block } from '../interfaces';
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
import { ResumeTabs } from '../components/ResumeTabs';
import { Footer } from '../components/Footer';

interface State {
  searchActive: boolean;
  importantOnly: boolean;
}

@(withRouter as any)
export class Resume extends React.PureComponent<RouteComponentProps<{ section: string }>, State> {
  state: Readonly<State> = {
    searchActive: false,
    importantOnly: false,
  };

  showSearch = () => this.setState({ searchActive: true });
  hideSearch = () => this.setState({ searchActive: false });

  toggleImportant = () =>
    this.setState(({ importantOnly }) => ({ importantOnly: !importantOnly }), this.hideSearch);

  filterBlocks = (blocks: Block[]): Block[] =>
    this.state.importantOnly ? blocks.filter(block => !block.unimportant) : blocks;

  componentDidMount() {
    const { section } = this.props.match.params;

    if (section) {
      scroller.scrollTo(section.toLowerCase(), scrollProps);
    }
  }

  render() {
    const { searchActive, importantOnly } = this.state;
    return (
      <div>
        <Helmet>
          <title>Resume | Ashwin Srinivasan</title>
        </Helmet>
        <GlobalHotKeys
          keyMap={{ SHOW_SEARCH: '/', HIDE_SEARCH: 'esc', TOGGLE_IMPORTANT: 'i' }}
          handlers={{
            SHOW_SEARCH: this.showSearch,
            HIDE_SEARCH: this.hideSearch,
            TOGGLE_IMPORTANT: this.toggleImportant,
          }}
        />
        {searchActive && (
          <SearchModal
            important={importantOnly}
            toggleImportant={this.toggleImportant}
            hide={this.hideSearch}
          />
        )}
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
            <ResumeTabs />
          </div>
        </section>
        <section className="section resume-body">
          <ResponsiveContainer size="large">
            <Education />
            {blocks.map(section => (
              <Section key={section.name} name={section.name}>
                {this.filterBlocks(section.data).map(block => (
                  <BlockBox key={block.id} {...block} hasMore={true} />
                ))}
              </Section>
            ))}
            <Skills />
          </ResponsiveContainer>
        </section>
        <Footer />
      </div>
    );
  }
}
