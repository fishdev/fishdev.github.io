import { coursework, teaching } from '../assets/data';
import { Course, Academic } from '../interfaces';

export const teachingAsCourses: Course[] = teaching.map((academic: Academic) => {
  const { id, semester } = academic;
  const course = coursework.find(course => course.id === id);
  if (!course)
    return {
      ...academic,
      name: id.toString(),
    };
  return {
    ...course,
    semester,
  };
});
