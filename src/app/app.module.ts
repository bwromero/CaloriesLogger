import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './shared/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { BmiComponent } from './bmi/bmi.component';
import { RegisterComponent } from './auth/register/register.component';
import { SocialMediaButtonsComponent } from './shared/social-media-buttons/social-media-buttons.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BmrComponent } from './bmr/bmr.component';
import { CaloriesBurnedComponent } from './calories-burned/calories-burned.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    LoginComponent,
    BmiComponent,
    RegisterComponent,
    SocialMediaButtonsComponent,
    RecipeEditComponent,
    BmrComponent,
    CaloriesBurnedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
