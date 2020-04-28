import { getData } from '../../../data';
import { Academic } from '../interfaces';

export const teachingAsAcademics = (): Academic[] =>
  (getData().resume.education.coursework || [])
    .filter((course) => course.ta)
    .map((course) =>
      course.ta!.map(
        (semester): Academic => ({
          id: course.id,
          name: course.name,
          institution: course.institution,
          semester,
        })
      )
    )
    .flat();
