import { signal } from '@angular/core';
import { Entity } from '../model/entity.model';

export abstract class Store<T extends Entity> {
  protected entities = signal<T[]>([]);

  addAll(entities: T[]) {
    this.entities.set(entities);
  }

  addOne(entity: T) {
    this.entities.update((entities) => [...entities, entity]);
  }

  deleteOne(id: T['id']) {
    this.entities.update((entities) => entities.filter((t) => t.id !== id));
  }
}
