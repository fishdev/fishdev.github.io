import { projects } from './projects';
import { experience } from './experience';
import { activities } from './activities';
import { Block, EntityType } from '../../../resume';

export const blocks: Array<{ name: EntityType; data: Block[] }> = [
  {
    name: 'projects',
    data: projects,
  },
  {
    name: 'experience',
    data: experience,
  },
  {
    name: 'activities',
    data: activities,
  },
];
