import { Button } from './Button';

export interface Dropdown extends Button {
  internal?: boolean;
  description?: React.ReactNode;
}
