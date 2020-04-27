import { Image } from './Image';

export interface Banner {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: Image;
  flipped?: boolean;
}
