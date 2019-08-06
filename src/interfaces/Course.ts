import { Academic } from './Academic';

export interface Course extends Academic {
  name: string;
  current?: boolean;
  url?: string;
  description?: React.ReactNode;
}
