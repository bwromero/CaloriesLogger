export class Ingredient {
  name: string;
  weight: number;
  unit: string;
  caloriesPerUnit: number;

  constructor(
    name: string,
    weight: number,
    unit: string,
    caloriesPerUnit: number
  ) {
    this.name = name;
    this.weight = weight;
    this.unit = unit;
    this.caloriesPerUnit = caloriesPerUnit;
  }

  getCalories(): number {
    return this.weight * this.caloriesPerUnit;
  }
}
