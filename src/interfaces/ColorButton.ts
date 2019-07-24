import { Button } from './Button';

export interface ColorButton extends Button {
  color: string;
  title?: string;
}
