import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from '../recipes/model/ingredient.model';
import { Meal } from '../recipes/model/meal.model';

@Component({
  selector: 'app-calories-tracking',
  templateUrl: './calories-tracking.component.html',
  styleUrls: ['./calories-tracking.component.css'],
})
export class CaloriesTrackingComponent implements OnInit {
  meals: Meal[] = [];

  ingredients: Ingredient[] = [
    { name: 'Oats', amount: 5, weight: 200, calories: 235 },
    { name: 'Milk', amount: 5, weight: 200, calories: 235 },
    { name: 'Banana', amount: 5, weight: 200, calories: 235 },
    { name: 'Honey', amount: 5, weight: 200, calories: 235 },
  ];

  constructor() {
    this.meals.push(new Meal('BreakFast', 5, this.ingredients));
    this.meals.push(new Meal('Lunch', 5, this.ingredients));
    this.meals.push(new Meal('Dinner', 5, this.ingredients));
    this.meals.push(new Meal('Snacks', 5, this.ingredients));
  }

  ngOnInit(): void {}
}
