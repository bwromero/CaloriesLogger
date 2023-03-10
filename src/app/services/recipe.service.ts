import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../recipes/model/ingredient.model';
import { Recipe } from '../recipes/model/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      1,
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce, Chinese Chicken with sweet and sour sauce Chinese Chicken with sweet and sour sauce, Chinese Chicken with sweet and sour sauce, Chinese Chicken with sweet and sour sauce Chinese Chicken with sweet and sour sauce, Chinese Chicken with sweet and sour sauce, Chinese Chicken with sweet and sour sauce Chinese Chicken with sweet and sour sauce',
      30,
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [
        new Ingredient('1 Ingredient small', 4, 'gr', 60),
        new Ingredient('2 Ingredient medium size ---', 1, 'gr', 2),
        new Ingredient('3 Ingredient big size -------------', 4, 'gr', 3),
        new Ingredient(
          '4 Ingredient very big ---------------------',
          1,
          'gr',
          4
        ),
        new Ingredient(
          '5 Ingredient huge -----------------------------------------------------',
          4,
          'gr',
          5
        ),
        new Ingredient('6 Ingredient', 1, 'gr', 6),
        new Ingredient('7 Ingredient', 4, 'gr', 7),
        new Ingredient('8 Ingredient', 1, 'gr', 8),
        new Ingredient('9 Ingredient', 4, 'gr', 23),
        new Ingredient('10 Ingredient', 1, 'gr', 44),
        new Ingredient('11 Ingredient', 4, 'gr', 23),
        new Ingredient('12 Ingredient', 1, 'gr', 55),
        new Ingredient('13 Ingredient', 4, 'gr', 23),
        new Ingredient('14 Ingredient', 1, 'gr', 55),
      ],
      [
        'Veniam consequat deserunt laboris in excepteur nostrud laboris anim aliquip sint enim ipsum est. Do sint quis aliquip labore in eu esse reprehenderit excepteur cupidatat et. Aute adipisicing adipisicing aliquip dolor anim enim enim proident ipsum.',
        'Nulla commodo dolor tempor nisi amet sint veniam veniam nisi irure velit voluptate. Incididunt proident non aliquip quis laborum sunt cupidatat tempor. Aliquip labore quis commodo nisi esse eiusmod consectetur ea qui aliquip nulla consectetur.',
        'Consequat aute ipsum nisi minim non in incididunt. Nulla cillum mollit est dolor cupidatat eu proident id excepteur esse esse magna. Excepteur irure sit ut minim reprehenderit dolore est consectetur reprehenderit reprehenderit Lorem. Tempor ea incididunt cillum est in veniam aute minim officia eiusmod incididunt ut. Sit magna voluptate qui duis ad enim in qui consequat aliquip est Lorem sit.',
        'Laboris mollit eiusmod in sunt labore qui sit irure et labore aute culpa aliquip voluptate. Nostrud sit ex velit culpa aliquip Lorem. Occaecat enim sit laboris amet consequat ad labore fugiat aute veniam officia deserunt ut voluptate. Mollit incididunt qui Lorem ad.',
        'Duis incididunt veniam do excepteur esse et velit qui id aliquip sint excepteur culpa ea. Proident quis ipsum tempor in eu ipsum cillum commodo nisi deserunt non ex. Mollit irure est non do ipsum aliqua culpa ex.',
      ]
    ),
    // new Recipe(
    //   2,
    //   'Sausage Casserole',
    //   'Sausage Casserole with onion gravy',
    //   45,
    //   'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
    //   [
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //     new Ingredient('Sausages', 6, 55, 222),
    //     new Ingredient('onions', 2, 55, 222),
    //   ],
    //   [
    //     'Veniam consequat deserunt laboris in excepteur nostrud laboris anim aliquip sint enim ipsum est. Do sint quis aliquip labore in eu esse reprehenderit excepteur cupidatat et. Aute adipisicing adipisicing aliquip dolor anim enim enim proident ipsum.',
    //     'Nulla commodo dolor tempor nisi amet sint veniam veniam nisi irure velit voluptate. Incididunt proident non aliquip quis laborum sunt cupidatat tempor. Aliquip labore quis commodo nisi esse eiusmod consectetur ea qui aliquip nulla consectetur.',
    //     'Consequat aute ipsum nisi minim non in incididunt. Nulla cillum mollit est dolor cupidatat eu proident id excepteur esse esse magna. Excepteur irure sit ut minim reprehenderit dolore est consectetur reprehenderit reprehenderit Lorem. Tempor ea incididunt cillum est in veniam aute minim officia eiusmod incididunt ut. Sit magna voluptate qui duis ad enim in qui consequat aliquip est Lorem sit.',
    //     'Laboris mollit eiusmod in sunt labore qui sit irure et labore aute culpa aliquip voluptate. Nostrud sit ex velit culpa aliquip Lorem. Occaecat enim sit laboris amet consequat ad labore fugiat aute veniam officia deserunt ut voluptate. Mollit incididunt qui Lorem ad.',
    //     'Duis incididunt veniam do excepteur esse et velit qui id aliquip sint excepteur culpa ea. Proident quis ipsum tempor in eu ipsum cillum commodo nisi deserunt non ex. Mollit irure est non do ipsum aliqua culpa ex.',
    //   ]
    // ),
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  //gets recipes and returns them
  getRecipes() {
    return this.recipes.slice();
  }

  removeRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  //finds a recipe by id
  getRecipe(id: number) {
    let recipe = this.recipes.find((recipe) => recipe.id === id);
    return recipe;
  }

  // adds a new recipe
  addRecipe(recipe: Recipe) {
    this.recipes.unshift(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  // updates existing altered recipe
  // observable emits when changed and emits new slice
  upDateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
