import { Semester } from './Semester';

export interface Academic {
  id: string | number;
  name: string;
  semester: Semester;
  institution: string;
}
