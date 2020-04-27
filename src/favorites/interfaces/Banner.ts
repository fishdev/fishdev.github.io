import { Image } from '../../base';

export interface Banner {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: Image;
  flipped?: boolean;
}
