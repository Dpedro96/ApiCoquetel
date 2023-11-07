import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  url = 'https://thecocktaildb.com/api/json/v1/1/'
  
  constructor(private http: HttpClient) { }
  getAll(userInp: string): Observable<any>{
    return this.http.get(`${this.url}search.php?s=${userInp}`);
  }
  getById(id: any){
    return this.http.get(`${this.url}lookup.php?i=${id}`)
  }
  getRandomDrinks(): Observable<any> {
    return this.http.get(`${this.url}random.php`);
  }
}
