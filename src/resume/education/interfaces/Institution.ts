import { MonthRange } from '../../core';
import { Semester } from './Semester';

export interface Institution {
  name: string;
  type: 'hs' | 'undergrad';
  url: string;
  photoUrl?: string;
  range: MonthRange;
  currentSemester?: string;
  semesters: {
    [id: string]: Semester;
  };
  scale: string;
  maxGrade: number;
}
