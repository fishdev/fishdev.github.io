import { Button } from './Button';
import { MonthRange } from './MonthRange';

/**
 * A flexible type for projects, activities, etc.
 *  - tagline and extra are mutually exclusive
 *  - id may represent a course number
 */
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
  info?: React.ReactNode;
}
