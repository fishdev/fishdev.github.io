import { Button } from './Button';
import { MonthRange } from './MonthRange';

export interface Block {
  id: string;
  name: string;
  tagline?: string;
  extra?: React.ReactNode;
  range?: MonthRange;
  event?: {
    name: string;
    url: string;
  };
  github?: string;
  url?: string;
  buttons?: Button[];
  description?: React.ReactNode;
  awards?: React.ReactNode[];
  hasMore?: boolean;
  info?: React.ReactNode;
}
