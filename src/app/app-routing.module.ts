import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './auth/login/login.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRouter: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
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
