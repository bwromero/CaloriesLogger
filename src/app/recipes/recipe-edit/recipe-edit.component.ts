import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  recipeForm: FormGroup;

  recipe: Recipe;
  ingredients: Ingredient[] = [];
  steps: string[] = [];
  imageURL: string;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: [''],
      time: ['', Validators.required],
      calories: ['', Validators.required],
      ingredientName: [''],
      ingredientWeight: [''],
      step: [''],
    });
  }

  previewImage(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageURL = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  mockId() {
    return Math.floor(Math.random() * 100000);
  }

  resetForm() {
    this.submitted = false;
    this.recipeForm.reset();
    this.imageURL = '';
    (document.getElementById('imageInput') as HTMLInputElement).value = null;
  }

  addIngredient() {}

  addStep() {
    if (this.recipeForm.get('step').value === '') {
      return;
    }
    this.steps.push(this.recipeForm.get('step').value);
    this.recipeForm.get('step').setValue('');
    console.log(this.steps);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.recipeForm.controls;
  }

  createRecipe() {
    this.submitted = true;
    if (this.recipeForm.invalid) {
      return;
    }
    this.recipe = { ...this.recipe, ...this.recipeForm.value };
    this.recipe.id = this.mockId();
    this.recipe.imagePath = this.imageURL;
    this.recipe.steps = this.steps;
    this.recipeService.addRecipe(this.recipe);
    this.resetForm();
  }
}
