import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/recipes/model/meal.model';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css'],
})
export class MealCardComponent implements OnInit {
  @Input() meal: Meal;

  constructor() {}

  ngOnInit(): void {}
}
