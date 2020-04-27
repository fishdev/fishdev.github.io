import { universities } from '../../../assets/data';
import { Academic } from '../interfaces';

export const teachingAsAcademics = (): Academic[] =>
  universities[0].coursework
    .filter((course) => course.ta)
    .map((course) =>
      course.ta!.map((semester) => ({
        id: course.id,
        name: course.name,
        semester,
      }))
    )
    .flat();
