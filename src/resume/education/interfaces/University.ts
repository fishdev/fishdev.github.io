import { Institution } from './Institution';

export interface University extends Institution {
  minors: string[];
  majors: string[];
  degree: string;
}
