import { Button } from './Button';

export interface Block {
  id: string;
  name: string;
  tagline?: string;
  extra?: React.ReactNode;
  start?: string;
  end?: string;
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
