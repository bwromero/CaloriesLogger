import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css'],
})
export class BmrComponent implements OnInit {
  weight: number;
  height: number;
  age: number;
  gender: string;
  activityLevel: string;
  bmr: number;

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

    this.bmr =
      10 * this.weight + 6.25 * this.height - 5 * this.age + genderValue;

    switch (this.activityLevel) {
      case 'sedentary':
        this.bmr *= 1.2;
        break;
      case 'light':
        this.bmr *= 1.375;
        break;
      case 'moderate':
        this.bmr *= 1.55;
        break;
      case 'high':
        this.bmr *= 1.725;
        break;
      case 'very high':
        this.bmr *= 1.9;
        break;
      default:
        throw new Error('Invalid activity level');
    }
  }
}
