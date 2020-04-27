import { Button } from '../..';

export interface Dropdown extends Button {
  internal?: boolean;
  description?: React.ReactNode;
}
