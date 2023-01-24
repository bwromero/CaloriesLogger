import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() goToRecipeDetail = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toDetail() {
    this.goToRecipeDetail.emit();
  }
}
