import { Injectable } from '@angular/core';
import { Hero } from "app/hero";
import { Http, Headers, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

//import { HEROES } from "app/mock-heroes";

@Injectable()
export class HeroService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });
  private heroesUrl = 'http://localhost:8080';  // <=ここを追加

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Hero[])

      .catch(this.handleError);
  }

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.heroesUrl).toPromise().then(response => response.json() as Hero[])

  // }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise<Hero[]>(
  //     resolve => setTimeout(resolve, 2000)
  //   ).then(
  //     () => this.getHeroes()
  //     );
  // }


  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //     .then(heroes => heroes.find(hero => hero.id === id));
  // }

  getHero(id: number): Promise<Hero> {
    return this.http.get(this.heroesUrl + "/" + id).toPromise().then(response => response.json() as Hero);
  }

  private handleError(error: Response | any): ErrorObservable {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
