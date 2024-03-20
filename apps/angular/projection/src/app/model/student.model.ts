import { Entity } from './entity.model';
import { Teacher } from './teacher.model';

export interface Student extends Entity {
  firstName: string;
  lastName: string;
  mainTeacher: Teacher;
  school: string;
}
