import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipeName: string;
  recipeDescription: string;
  imageUrl: string | ArrayBuffer;
  recipeTime: number;
  recipeCalories: number;
  recipe: Recipe;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  previewImage(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.imageUrl = '';
    }
  }

  createRecipe() {
    this.recipe = new Recipe(
      1,
      this.recipeName,
      this.recipeDescription,
      this.recipeTime,
      this.imageUrl,
      null,
      null
    );

    this.recipe.setCalories(this.recipeCalories);
  }
}
