import { MonthRange } from '../../core';
import { Semester } from './Semester';

export interface Institution {
  name: string;
  url: string;
  range: MonthRange;
  currentSemester?: string;
  semesters: {
    [id: string]: Semester;
  };
  scale: string;
}
