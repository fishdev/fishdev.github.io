import { coursework, blocks, languages, technologies } from '../assets/data';
import { Entity, EntityType, Block, Course, Skill } from '../interfaces';

export const toEntity = (type: EntityType) => (data: Course | Block | Skill): Entity => ({
  type,
  data,
});

export const entities: Entity[] = blocks
  .reduce((acc, { name, data }) => acc.concat(data.map(toEntity(name))), [])
  .concat(
    coursework.map((course: Course) => ({
      type: 'coursework',
      data: course,
      clickable: false,
    })),
    languages.concat(technologies).map(toEntity('skills'))
  );
