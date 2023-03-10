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
import { CaloriesBurnedComponent } from './calories-burned/calories-burned.component';
import { CaloriesTrackingComponent } from './calories-tracking/calories-tracking.component';
import { FoodItemComponent } from './shared/food-item/food-item.component';
import { MealCardComponent } from './shared/meal-card/meal-card.component';
import { TdeeComponent } from './tdee/tdee.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrLineComponent } from './shared/or-line/or-line.component';
import {
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerRangePopupComponent } from './shared/datepicker-range-popup/datepicker-range-popup.component';

import { CustomDateFormatterService } from './services/custom-date-formatter.service';
import { HomeComponent } from './home/home.component';
import { FormButtonsComponent } from './shared/form-buttons/form-buttons.component';

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
    TdeeComponent,
    RegisterComponent,
    SocialMediaButtonsComponent,
    RecipeEditComponent,
    CaloriesBurnedComponent,
    CaloriesTrackingComponent,
    FoodItemComponent,
    MealCardComponent,
    TdeeComponent,
    OrLineComponent,
    DatepickerRangePopupComponent,
    HomeComponent,
    FormButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgbDatepickerModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: CustomDateFormatterService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
