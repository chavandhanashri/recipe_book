import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Recipe } from 'src/app/Shared/model';
import { RecipesService } from 'src/app/Shared/recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];
  recipes1: Recipe[] = [];
  recipes2: any;

  constructor(private recipeService: RecipesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.recipeService.getRecipes().pipe(debounceTime(5000)).subscribe(data =>{
    this.recipes2 = this.recipeService.getRecipesbylocalstrorage();
    this.recipes1 = data
    this.recipes = [...this.recipes1, ...this.recipes2]
    console.log(this.recipes)
  });
  this.recipes = this.recipeService.getRecipesbylocalstrorage();
  console.log(this.recipes)
  }
 navigateToRecipe(recipeId: number | undefined): void{
  this.router.navigate(['/recipe-detail',recipeId])
 }
 navigateToadd(){
  this.router.navigate(['/add-recipe'])
 }
}
