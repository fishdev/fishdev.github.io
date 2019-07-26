import { coursework, blocks, languages, technologies } from '../assets/data';
import { Entity, EntityType, Block, Course, Skill } from '../interfaces';

export const toEntity = (type: EntityType) => (data: Course | Block | Skill): Entity => ({
  type,
  data,
});

export const entities: Entity[] = blocks
  .reduce((acc, { name, data }) => acc.concat(data.map(toEntity(name))), new Array<Entity>())
  .concat(
    coursework.map((course: Course) => ({
      type: 'coursework',
      data: course,
      clickable: false,
    })),
    languages.concat(technologies).map(toEntity('skills'))
  );

export const getEntity = (id: string): Entity | undefined =>
  entities.find((entity: Entity) => id === entity.data.id);

export const filterEntities = (query: string) => {
  query = query.toLowerCase();
  return entities.filter((entity: Entity) => {
    if (entity.data.name.toLowerCase().includes(query)) return true;

    switch (entity.type) {
      case 'coursework':
        if ((entity.data as Course).id.toString().includes(query)) return true;
        break;
      case 'projects':
      case 'experience':
      case 'activities':
        if (
          (entity.data as Block).tagline &&
          (entity.data as Block).tagline!.toLowerCase().includes(query)
        )
          return true;
        if (
          (entity.data as Block).event &&
          (entity.data as Block).event!.name.toLowerCase().includes(query)
        )
          return true;
        break;
      case 'skills':
        if ((entity.data as Skill).id.includes(query)) return true;
        break;
    }

    return false;
  });
};
