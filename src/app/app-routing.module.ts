import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Recipes/dashboard/dashboard.component';
import { RecipesDetailComponent } from './Recipes/recipes-detail/recipes-detail.component';
import { AddRecipeComponent } from './Recipes/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'recipe-detail/:id', component: RecipesDetailComponent},
  { path: 'add-recipe', component: AddRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
