import { Course } from '../interfaces';
import { getData } from '../../../data';

export const allCourses = (): Course[] =>
  Object.values(getData().resume.education.universities).reduce(
    (acc, { coursework }) => acc.concat(coursework || []),
    new Array<Course>()
  );
