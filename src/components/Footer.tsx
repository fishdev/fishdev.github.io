import React from 'react';

import { FooterContent } from './FooterContent';

export const Footer: React.FC = () => (
  <section className="hero is-black is-small">
    <div className="hero-body">
      <FooterContent showName />
    </div>
  </section>
);
