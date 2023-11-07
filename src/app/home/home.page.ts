import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CocktailServiceService } from '../service/cocktail-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  randomDrinks: any[] = [];
  result: any = null;
  searchTerms: string = '';
  constructor(private cqt : CocktailServiceService) {}

  ngOnInit(): void {
    this.getFiveRandomDrinks();
  }

  getFiveRandomDrinks() {
    for (let i = 0; i < 4; i++) {
      this.cqt.getRandomDrinks().subscribe(
        (data: any) => {
          const drink = data.drinks ? data.drinks[0] : null;
          if (drink) {
            this.randomDrinks.push(drink);
          }
        },
        (error) => {
          console.error('Erro na requisição', error);
        }
      );
  }
}

  search(){
    this.randomDrinks = []
    this.cqt.getAll(this.searchTerms).subscribe((data: any) => {
      this.result = data.drinks ? data.drinks[0] : null;},
    (error) => {
      console.error('Erro na requisição', error)
    });
  }


}
