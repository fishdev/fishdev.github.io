import { Institution } from './Institution';
import { Course } from './Course';

export interface University extends Institution {
  minors: string[];
  majors: string[];
  coursework: Course[];
  degree: string;
  units: string;
}
