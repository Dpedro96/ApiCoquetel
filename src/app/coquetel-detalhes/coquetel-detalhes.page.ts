import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailServiceService } from '../service/cocktail-service.service';

@Component({
  selector: 'app-coquetel-detalhes',
  templateUrl: './coquetel-detalhes.page.html',
  styleUrls: ['./coquetel-detalhes.page.scss'],
})
export class CoquetelDetalhesPage implements OnInit {
  info: any;
  constructor(private actRoute : ActivatedRoute, private cqt : CocktailServiceService) { }

 ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.cqt.getById(id).subscribe((data: any) => {
      this.info = data.drinks ? data.drinks[0] : null;},
    (error) => {
      console.error('Erro na requisição', error)
    });
  }

  getIngredients(drink: any): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink['strIngredient' + i];
      const measure = drink['strMeasure' + i];

      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }

    return ingredients.filter(Boolean); // Filtra os valores vazios, se houver
  }
}
