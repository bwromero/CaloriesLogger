import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    time: new FormControl(''),
    calories: new FormControl(''),
    ingredient: new FormGroup({
      name: new FormControl(''),
      weight: new FormControl(''),
    }),
    step: new FormControl(''),
  });

  recipe: Recipe;
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
      this.recipeForm.controls['imageUrl'].setValue;
    };
    reader.readAsDataURL(file);
  }

  mockId() {
    return Math.random();
  }

  createRecipe() {
    // this.recipe = new Recipe(
    //   this.mockId(),
    //   this.recipeName,
    //   this.recipeDescription,
    //   this.recipeTime,
    //   this.imageUrl,
    //   this.ingredients,
    //   this.steps
    // );
    this.recipe = this.recipeForm.value();

    this.recipe.id = this.mockId();
    this.recipeService.addRecipe(this.recipe);
  }

  addIngredient() {
    return 0;
  }

  addStep() {
    return 0;
  }
}
