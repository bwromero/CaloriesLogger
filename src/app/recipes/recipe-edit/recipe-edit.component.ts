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
    imagePath: new FormControl(null),
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
  imageURL: string;

  constructor(
    private domSanitizer: DomSanitizer,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {}

  previewImage(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageURL = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  mockId() {
    return Math.random();
  }

  resetForm() {
    this.recipeForm.reset();
    this.imageURL = '';
    (document.getElementById('imageInput') as HTMLInputElement).value = null;
  }

  createRecipe() {
    this.recipe = { ...this.recipe, ...this.recipeForm.value };
    this.recipe.id = this.mockId();
    this.recipe.imagePath = this.imageURL;
    this.recipeService.addRecipe(this.recipe);
    this.resetForm();
  }

  addIngredient() {}

  addStep() {
    return 0;
  }
}
