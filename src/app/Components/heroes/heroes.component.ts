import {Component, OnInit} from '@angular/core';
import {Hero} from '../../Models/hero';
import {HEROES} from '../../Mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect = (hero: Hero) => {
    alert(hero.name);
  };
}
