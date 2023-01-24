import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdee',
  templateUrl: './tdee.component.html',
  styleUrls: ['./tdee.component.css'],
})
export class TdeeComponent implements OnInit {
  weight: number;
  height: number;
  age: number;
  gender: string;
  activityLevel: string;
  tdee: number;
  bodyFat: number;

  constructor() {}

  ngOnInit(): void {}

  calculateBMR() {
    let bmr: number;
    let genderValue: number;

    if (this.gender === 'male') {
      genderValue = 5;
    } else if (this.gender === 'female') {
      genderValue = -161;
    } else {
      throw new Error('Invalid gender');
    }

    this.tdee =
      10 * this.weight + 6.25 * this.height - 5 * this.age + genderValue;

    switch (this.activityLevel) {
      case 'sedentary':
        this.tdee *= 1.2;
        break;
      case 'light':
        this.tdee *= 1.375;
        break;
      case 'moderate':
        this.tdee *= 1.55;
        break;
      case 'high':
        this.tdee *= 1.725;
        break;
      case 'very high':
        this.tdee *= 1.9;
        break;
      default:
        throw new Error('Invalid activity level');
    }
  }
}
