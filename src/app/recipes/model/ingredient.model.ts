export class Ingredient {
  public name: string;
  public amount: number;
  public weight: number;
  public calories: number;

  constructor(name: string, amount: number, weight: number, calories: number) {
    this.name = name;
    this.amount = amount;
    this.weight = weight;
    this.calories = calories;
  }
}
