import { Ingredient } from './ingredient.model';

/**
 * Recipe blueprint
 */
export class Recipe {
  public name: string;
  public description: string;
  public time: number;
  public imagePath: string;
  public ingredients: Ingredient[];
  public calories = 0;

  constructor(
    name: string,
    description: string,
    time: number,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.time = time;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.getCalories();
  }

  getCalories() {
    this.ingredients.forEach((ingredient) => {
      this.calories += ingredient.calories;
    });
    console.log(this.calories);
  }
}
