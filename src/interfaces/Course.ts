import { Academic } from './Academic';

export interface Course extends Academic {
  current?: boolean;
  url?: string;
  ta?: string[];
  description?: React.ReactNode;
}
