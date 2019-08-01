import { Button } from './Button';
import { MonthRange } from './MonthRange';
import { BlockEvent } from './BlockEvent';
import { BlockImage } from './BlockImage';

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
  event?: BlockEvent;
  github?: string;
  url?: string;
  buttons?: Button[];
  description?: React.ReactNode;
  moreButtons?: Button[];
  awards?: React.ReactNode[];
  info?: React.ReactNode;
  images?: BlockImage[];
  unimportant?: boolean;
}
