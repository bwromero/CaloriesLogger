import { Ingredient } from './ingredient.model';

export class Meal {
  public name: string;
  public calories: number;
  public ingredients: Ingredient[];

  constructor(name: string, amount: number, ingredients: Ingredient[]) {
    this.name = name;
    this.calories = amount;
    this.calories = amount;
    this.ingredients = ingredients;
    this.calculateCalories();
  }

  public calculateCalories() {
    this.ingredients.forEach((ingredient) => {
      this.calories += ingredient.calories;
    });
  }
}
