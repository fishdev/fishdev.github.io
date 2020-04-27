import { universities, blocks, languages, technologies } from '../../../assets/data';
import { Entity, EntityType, Block } from '../interfaces';
import { Course } from '../../education';
import { Skill } from '../../skills';

export const toEntity = (type: EntityType) => (data: Course | Block | Skill): Entity => ({
  type,
  data,
});

const getEntities = (): Entity[] =>
  blocks
    .reduce((acc, { name, data }) => acc.concat(data.map(toEntity(name))), new Array<Entity>())
    .concat(
      universities[0].coursework.map((course: Course) => ({
        type: 'coursework',
        data: course,
        clickable: false,
      })),
      languages.concat(technologies).map(toEntity('skills'))
    );

export const getEntity = (id: string): Entity | undefined =>
  getEntities().find((entity: Entity) => id === entity.data.id);

export const filterEntities = (query: string) => {
  query = query.toLowerCase().trim();
  return getEntities().filter((entity: Entity) => {
    if (entity.data.id.toString().includes(query)) return true;
    if (entity.data.name.toLowerCase().includes(query)) return true;

    switch (entity.type) {
      case 'coursework':
        if ((entity.data as Course).ta && query === 'ta') return true;
        if ((entity.data as Course).ta && query.includes('teaching')) return true;
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
