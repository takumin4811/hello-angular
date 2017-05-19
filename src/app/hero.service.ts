import { Injectable } from '@angular/core';
import { Hero } from "app/hero";
import { HEROES } from "app/mock-heroes";

@Injectable()
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(
      resolve => setTimeout(resolve, 2000)
    ).then(
      () => this.getHeroes()
      );
  }

}
