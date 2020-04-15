import { Course } from '../../education';
import { Block } from './Block';
import { Skill } from '../../skills';

export type EntityType = 'coursework' | 'projects' | 'experience' | 'activities' | 'skills';

export interface Entity {
  type: EntityType;
  data: Course | Block | Skill;
}
