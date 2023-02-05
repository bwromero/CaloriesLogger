import { Ingredient } from './ingredient.model';

/**
 * Recipe blueprint
 */
export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public time: number;
  public imagePath: File | string;
  public ingredients: Ingredient[];
  public calories = 0;
  public steps: string[];

  constructor(
    id: number,
    name: string,
    description: string,
    time: number,
    imagePath: File,
    ingredients: Ingredient[] | null,
    steps: string[] | null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.time = time;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.steps = steps;

    this.getCalories();
  }

  getCalories() {
    this.ingredients.forEach((ingredient) => {
      this.calories += ingredient.calories;
    });
  }

  setCalories(calories: number) {
    this.calories = calories;
  }
}
