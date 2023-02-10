import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { filter, map } from 'rxjs/operators';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeId: number;
  recipe: Recipe;

  constructor(
    public activatedRoute: ActivatedRoute,
    private route: Router,
    private router: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.router.queryParams
      .pipe(filter((params) => params.recipeId))
      .subscribe((params) => {
        this.recipeId = Number(params.recipeId);
      });
    this.recipe = this.recipeService.getRecipe(this.recipeId);
  }

  get rows() {
    if (this.recipe.ingredients === undefined) {
      return;
    }
    const rowCount = Math.ceil(this.recipe.ingredients.length / 3);
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      const startIndex = i * 5;
      const endIndex = startIndex + 5;
      const row = this.recipe.ingredients.slice(startIndex, endIndex);
      rows.push(row);
    }
    return rows;
  }
}
