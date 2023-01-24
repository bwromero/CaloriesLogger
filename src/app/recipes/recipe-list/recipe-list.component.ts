import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      1,
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      30,
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [
        new Ingredient('Chicken Portions', 4, 50, 60),
        new Ingredient('Chinese spices', 1, 55, 555),
      ]
    ),
    new Recipe(
      2,
      'Sausage Casserole',
      'Sausage Casserole with onion gravy',
      45,
      'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
      [
        new Ingredient('Sausages', 6, 55, 222),
        new Ingredient('onions', 2, 55, 222),
      ]
    ),
    new Recipe(
      3,
      'Taco Meat Recipe',
      'Taco with minced beef and onion',
      60,
      'https://www.theslowroasteditalian.com/wp-content/uploads/2022/04/How-to-Make-Taco-Meat-in-skillet-3753742.jpg',
      [
        new Ingredient('Minced Beef', 2, 44, 232),
        new Ingredient('onions', 2, 33, 555),
      ]
    ),
    new Recipe(
      4,
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      120,
      'https://www.tysonfoods.com/sites/default/files/styles/max_width/public/2018-10/196725_JD_EggWich_Florentine_BP_lk3_LI_122115_GPI%20%281%29%20%281%29.JPG?itok=Es4Hae-5',
      [
        new Ingredient('Eggs', 6, 22, 232),
        new Ingredient('Wraps', 2, 55, 555),
        new Ingredient('Cheese', 1, 23, 122),
      ]
    ),
    new Recipe(
      5,
      'Fried EggPlant',
      'Eggplant daked with cheese',
      55,
      'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg',
      [
        new Ingredient('Aubergine', 6, 231, 555),
        new Ingredient('Cheese', 2, 233, 225),
      ]
    ),
    new Recipe(
      6,
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      55,
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [
        new Ingredient('Chicken Portions', 4, 50, 60),
        new Ingredient('Chinese spices', 1, 55, 555),
      ]
    ),
    new Recipe(
      7,
      'Sausage Casserole',
      'Sausage Casserole with onion gravy',
      44,
      'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
      [
        new Ingredient('Sausages', 6, 55, 222),
        new Ingredient('onions', 2, 55, 222),
      ]
    ),
    new Recipe(
      8,
      'Taco Meat Recipe',
      'Taco with minced beef and onion',
      33,
      'https://www.theslowroasteditalian.com/wp-content/uploads/2022/04/How-to-Make-Taco-Meat-in-skillet-3753742.jpg',
      [
        new Ingredient('Minced Beef', 2, 44, 232),
        new Ingredient('onions', 2, 33, 555),
      ]
    ),
    new Recipe(
      9,
      'Egg delight',
      'Lightly toasted wraps with fresh eggs',
      22,
      'https://www.tysonfoods.com/sites/default/files/styles/max_width/public/2018-10/196725_JD_EggWich_Florentine_BP_lk3_LI_122115_GPI%20%281%29%20%281%29.JPG?itok=Es4Hae-5',
      [
        new Ingredient('Eggs', 6, 22, 232),
        new Ingredient('Wraps', 2, 55, 555),
        new Ingredient('Cheese', 1, 23, 122),
      ]
    ),
    new Recipe(
      10,
      'Fried EggPlant',
      'Eggplant daked with cheese',
      16,
      'https://i.ytimg.com/vi/VGSc5WIljb0/maxresdefault.jpg',
      [
        new Ingredient('Aubergine', 6, 231, 555),
        new Ingredient('Cheese', 2, 233, 225),
      ]
    ),
    new Recipe(
      11,
      'Chinese Chicken',
      'Chinese Chicken with sweet and sour sauce',
      35,
      'https://s-media-cache-ak0.pinimg.com/originals/63/6d/8d/636d8d6cfbf1862e5ad5f89571c55430.jpg',
      [
        new Ingredient('Chicken Portions', 4, 50, 60),
        new Ingredient('Chinese spices', 1, 55, 555),
      ]
    ),
    new Recipe(
      12,
      'Sausage Casserole',
      'Sausage Casserole with onion gravy',
      55,
      'http://d3udvtnhu4gqbm.cloudfront.net/wp-content/uploads/Italian-Sausage.jpg',
      [
        new Ingredient('Sausages', 6, 55, 222),
        new Ingredient('onions', 2, 55, 222),
      ]
    ),
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToRecipeDetail(recipe: Recipe) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        recipe: JSON.stringify(recipe),
      },
    };

    this.router.navigate(['/recipeDetail'], navigationExtras);
  }
}
