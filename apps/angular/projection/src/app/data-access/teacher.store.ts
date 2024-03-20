import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { Store } from './entity.store';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore extends Store<Teacher> {
  teachers$ = this.entities.asReadonly();
}
