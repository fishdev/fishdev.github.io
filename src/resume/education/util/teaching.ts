import { Academic, Course } from '../interfaces';

export const teachingAsAcademics = (courses: Course[]): Academic[] =>
  courses
    .filter((course) => course.ta)
    .map((course) =>
      course.ta!.map(
        (semester): Academic => ({
          id: course.id,
          name: course.name,
          institution: course.institution,
          hidden: course.hidden,
          semester,
        })
      )
    )
    .flat();
