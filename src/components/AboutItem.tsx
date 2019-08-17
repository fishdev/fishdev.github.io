import React from 'react';

import { Sentence, Image } from '../interfaces';
import { SentenceHero } from './SentenceHero';
import { ImageHero } from './ImageHero';

const isSentence = (obj: Sentence | Image): obj is Sentence => (obj as Sentence).icon !== undefined;

export const AboutItem: React.FC<Sentence | Image> = props =>
  isSentence(props) ? <SentenceHero {...props as Sentence} /> : <ImageHero {...props as Image} />;
