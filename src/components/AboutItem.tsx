import React from 'react';

import { Sentence, Image } from '../interfaces';
import { SentenceHero } from './SentenceHero';
import { ImageHero } from './ImageHero';
import { ParticlesHero } from './ParticlesHero';

const isSentence = (obj: any): obj is Sentence => (obj as Sentence).icon !== undefined;

const isImage = (obj: any): obj is Image => (obj as Image).original !== undefined;

export const AboutItem: React.FC<any> = props => {
  switch (true) {
    case isSentence(props):
      return <SentenceHero {...props as Sentence} />;
    case isImage(props):
      return <ImageHero {...props as Image} />;
    default:
      return <ParticlesHero />;
  }
};
