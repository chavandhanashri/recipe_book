import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { RecipesService } from 'src/app/Shared/recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipes: any;

  constructor( private route: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeById(id).subscribe(data => {
      this.recipes = data;
    })
  }

  downloadRecipeAsPDF(recipe: any) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(recipe.title, 10, 10);

  doc.setFontSize(12);
  doc.text('Ingredients:', 10, 20);

  recipe.ingredients.forEach((ing: string, index: number) => {
    doc.text(`- ${ing}`, 12, 30 + index * 7);
  });

  const instructionStart = 30 + recipe.ingredients.length * 7 + 10;
  doc.text('Instructions:', 10, instructionStart);

  const splitInstructions = doc.splitTextToSize(recipe.steps, 180);
  doc.text(splitInstructions, 12, instructionStart + 10);

  doc.save(`${recipe.title.replace(/\s+/g, '_')}.pdf`);
}
}
