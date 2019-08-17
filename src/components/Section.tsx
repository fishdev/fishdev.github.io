import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element as ScrollElement } from 'react-scroll';

interface Props {
  name: string;
}

export const Section: React.FC<Props> = ({ name, children }) => (
  <ScrollElement className="block-container" name={name}>
    <ScrollAnimation animateIn="zoomIn" animateOnce>
      <div className="hero is-small is-link gradient rounded">
        <div className="hero-body has-text-centered">
          <h4 className="title is-4 fancy">{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
        </div>
      </div>
    </ScrollAnimation>
    <section className="section">
      <div className="content">{children}</div>
    </section>
  </ScrollElement>
);
