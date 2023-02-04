import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RecipeService } from 'src/app/services/recipe.service';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number = 0;
  recipeName: string;
  recipeDescription: string;
  imageUrl: string;
  recipeTime: number;
  recipeCalories: number;
  recipe: Recipe;
  ingridient: string;
  step: string;

  ingredients: Ingredient[] = [];
  steps: string[] = [];

  constructor(
    private domSanitizer: DomSanitizer,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {}

  previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  mockId() {
    return this.id + 1;
  }

  createRecipe() {
    this.recipe = new Recipe(
      this.mockId(),
      this.recipeName,
      this.recipeDescription,
      this.recipeTime,
      this.imageUrl,
      this.ingredients,
      this.steps
    );

    this.recipe.setCalories(this.recipeCalories);

    this.recipeService.addRecipe(this.recipe);
  }

  addIngredient() {
    return 0;
  }

  addStep() {
    return 0;
  }
}
