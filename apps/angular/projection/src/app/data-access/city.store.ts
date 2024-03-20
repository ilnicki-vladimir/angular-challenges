import { Injectable } from '@angular/core';
import { City } from '../model/city.model';
import { Store } from './entity.store';

@Injectable({
  providedIn: 'root',
})
export class CityStore extends Store<City> {
  cities$ = this.entities.asReadonly();
}
