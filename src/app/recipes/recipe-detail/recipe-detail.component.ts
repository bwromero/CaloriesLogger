import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe$: Observable<object>;

  recipe: Recipe;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipe$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    console.log(this.recipe$);
  }
}
