import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/recipes/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToRecipeDetail() {
    this.router.navigate(['/recipeDetail']).then(
      (nav) => {
        console.log(nav);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
