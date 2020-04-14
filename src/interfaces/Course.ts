import { Academic } from './Academic';

export interface Course extends Academic {
  url?: string;
  ta?: string[];
  description?: React.ReactNode;
}
