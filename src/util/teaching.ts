import { coursework } from '../assets/data';
import { Academic } from '../interfaces';

export const teachingAsAcademics: Academic[] = coursework
  .filter(course => course.ta)
  .map(course =>
    course.ta!.map(semester => ({
      id: course.id,
      name: course.name,
      semester,
    }))
  )
  .flat();
