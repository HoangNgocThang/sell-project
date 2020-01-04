import { Injectable } from '@angular/core';
import { HEROES } from '../../Mocks/mock-heroes';
import { Hero } from '../../Models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
