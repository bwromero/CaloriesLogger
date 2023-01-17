import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './auth/login/login.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { BmiComponent } from './bmi/bmi.component';
import { BmrComponent } from './bmr/bmr.component';
import { CaloriesBurnedComponent } from './calories-burned/calories-burned.component';
import { CaloriesTrackingComponent } from './calories-tracking/calories-tracking.component';

const appRouter: Routes = [
  {
    path: '',
    redirectTo: 'calories-tracking',
    pathMatch: 'full',
  },
  {
    path: 'calories-tracking',
    component: CaloriesTrackingComponent,
    children: [],
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [],
  },
  {
    path: 'recipeDetail',
    component: RecipeDetailComponent,
  },
  {
    path: 'recipeEdit',
    component: RecipeEditComponent,
  },
  {
    path: 'bmi',
    component: BmiComponent,
  },
  {
    path: 'bmr',
    component: BmrComponent,
  },
  {
    path: 'caloriesBurned',
    component: CaloriesBurnedComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
