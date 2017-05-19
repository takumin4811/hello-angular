import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';

// appComponentの、HTML上での挿入位置の目印（セレクタ）および、コンポーネントのビューの場所を定義。
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// appComponentはメインのコンポーネントクラス。状態変数として、ヒーロー一覧、選択済のHero、onSelect メソッドを持つ。
export class AppComponent {
  title: string = 'Tour of Heroes';
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    // this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }




  // コンポーネントに ngOnInit ライフサイクルフックが実装してあれば、 Angularが呼び出してくれます。 
  // ngOnInit メソッドはコンポーネントの初期化のための正しいタイミングで呼び出されます。
  ngOnInit(): void {
    this.getHeroes();
  }


}


