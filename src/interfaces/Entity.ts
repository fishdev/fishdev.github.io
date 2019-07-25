import { Course } from './Course';
import { Block } from './Block';
import { Skill } from './Skill';

export type EntityType = 'coursework' | 'projects' | 'experience' | 'activities' | 'skills';

export interface Entity {
  type: EntityType;
  data: Course | Block | Skill;
  clickable: boolean;
}
