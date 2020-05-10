import { MonthRange } from '../../core';

export interface Institution {
  name: string;
  url: string;
  range: MonthRange;
  currentSemester?: string;
  semesters: {
    [id: string]: {
      grade: number;
      weight: number;
    };
  };
  scale: string;
}
