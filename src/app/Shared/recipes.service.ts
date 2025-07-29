import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Recipe } from './model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
private jsonUrl = 'assets/db.json'; 
 recipes: any;
 private storageKey = 'Recipe_data';


constructor(private http: HttpClient) {
   this.loadFromStorage();
 }

 getRecipes(): Observable<Recipe[]> {
  return this.http.get<{ recipes: Recipe[] }>(this.jsonUrl).pipe(
    map(response => response.recipes) // 👈 extract array
  );
  }
   getRecipeById(id: number): Observable<any | undefined> {
    return this.getRecipes().pipe(
      map(recipes => recipes.find(recipe => recipe.id === id))
    );
  }

  private saveStorage(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.recipes) )
  }
   private loadFromStorage() {
    const data = localStorage.getItem(this.storageKey);
    this.recipes = data ? JSON.parse(data) : [];
  }
  getRecipesbylocalstrorage() {
    return this.recipes;
  }

  addRecipes(recipes: any) {
    recipes.id = new Date().getTime();
    this.recipes.push(recipes);
    this.saveStorage();
  }
}
