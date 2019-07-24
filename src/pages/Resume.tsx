import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from '../components/Navbar';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { blocks } from '../assets/data';
import { Education } from '../components/Education';
import { Section } from '../components/Section';
import { HorizontalBlock } from '../components/HorizontalBlock';
import { Skills } from '../components/Skills';
import { Profile } from '../components/Profile';

export const Resume: React.FC = () => (
  <div>
    <Helmet>
      <title>Resume | Ashwin Srinivasan</title>
    </Helmet>
    <section className="hero is-black">
      <div className="hero-head">
        <Navbar showName={false} showButtons={false} />
      </div>
      <div className="hero-body fancy">
        <ResponsiveContainer centered={true} size="medium">
          <Profile showPortrait={false}>
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} className="has-text-white">
              <span>Download resume as PDF</span>
              <span className="icon">
                <i className="fas fa-file-download" />
              </span>
            </a>
          </Profile>
        </ResponsiveContainer>
      </div>
      <div className="hero-foot fancy">
        <nav className="tabs is-small is-centered">
          <div className="container">
            <ul>
              <li>
                <a>Education</a>
              </li>
              {blocks.map(section => (
                <li key={section.name}>
                  <a>{section.name}</a>
                </li>
              ))}
              <li>
                <a>Skills</a>
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
              <HorizontalBlock key={block.id} {...block} />
            ))}
          </Section>
        ))}
        <Skills />
      </ResponsiveContainer>
    </section>
  </div>
);
