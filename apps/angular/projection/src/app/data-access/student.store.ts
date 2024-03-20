import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Store } from './entity.store';

@Injectable({
  providedIn: 'root',
})
export class StudentStore extends Store<Student> {
  students$ = this.entities.asReadonly();
}
