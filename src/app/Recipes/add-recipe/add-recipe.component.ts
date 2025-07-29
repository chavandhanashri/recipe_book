import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/Shared/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  AddRecipeForm: any;

  constructor(private fb: FormBuilder,
    private recipeSrvice: RecipesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.AddRecipeForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: ['', Validators.required],
    steps: ['', Validators.required],
    imageUrl: ['', Validators.required]
    })
  }
  addRecipe(){
   if(this.AddRecipeForm.valid){
     const recipes = this.AddRecipeForm.value;
      console.log('recipe Added:', recipes);
      this.recipeSrvice.addRecipes(recipes);
      this.router.navigate(['/'])
   }
  }
}
