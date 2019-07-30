import { Month } from './Month';

export interface MonthRange {
  start?: Month;
  end?: Month | 'Present';
}
