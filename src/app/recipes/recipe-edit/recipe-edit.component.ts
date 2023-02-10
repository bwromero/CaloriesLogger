import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
  units = ['kg', 'lb', 'oz', 'gr', 'mg', 'ml'];
  selectedUnit = 'gr';
  totalCalories = 0;
  addIngredientClicked: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(12)]],
      imagePath: [''],
      time: ['', Validators.required],
      calories: ['', Validators.required],
      ingredientName: [''],
      ingredientWeight: [''],
      ingredientUnit: [this.selectedUnit],
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

  addIngredient() {
    this.addIngredientClicked = true;
    // checks if the inputs are filled
    if (
      this.recipeForm.get('ingredientName').value === '' ||
      this.recipeForm.get('ingredientWeight').value === ''
    ) {
      return;
    }
    // gets the data from the form
    let ingredientName = this.recipeForm.get('ingredientName').value;
    let ingredientWeight = this.recipeForm.get('ingredientWeight').value;
    let ingredientUnit = this.recipeForm.get('ingredientUnit').value;
    let newIngredient = new Ingredient(
      ingredientName,
      ingredientWeight,
      ingredientUnit,
      7
    );

    this.ingredients.push(newIngredient); //push the new recipe
    this.totalCalories += newIngredient.getCalories(); // add the calories from the new ingridient  to the total calories
    this.recipeForm.get('calories').setValue(this.totalCalories); //sets the total calories to the calories input
    //cleans ingredient inputs
    this.recipeForm.get('ingredientName').setValue('');
    this.recipeForm.get('ingredientWeight').setValue('');

    this.addIngredientClicked = false;
  }

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
    this.router.navigate(['/recipes']);
  }
}
