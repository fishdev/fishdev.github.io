import { MonthRange } from '../../core';
import { Course } from './Course';
import { Semester } from './Semester';

export interface Institution {
  name: string;
  url: string;
  range: MonthRange;
  coursework?: Course[];
  currentSemester?: Semester;
  grade: number;
}
