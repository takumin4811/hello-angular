import { Component } from '@angular/core';
import { Hero } from "./hero";


// appComponentの、HTML上での挿入位置の目印（セレクタ）および、コンポーネントのビューの場所を定義。
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// appComponentはメインのコンポーネントクラス。状態変数として、ヒーロー一覧、選択済のHero、onSelect メソッドを持つ。
export class AppComponent {
  title:string = 'Tour of Heroes';
  heroes:Hero[]=HEROES;

  selectedHero :Hero;

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
}


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

