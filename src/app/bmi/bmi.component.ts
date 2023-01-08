import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BmiComponent implements OnInit {
  weight: number;
  height: number;
  age: number;
  gender: string;
  bmi: number;
  bmiCategory: string | void;
  constructor() {}

  ngOnInit(): void {}
  calculateBMI() {
    this.bmi = this.weight / (((this.height / 100) * this.height) / 100);
    this.bmiCategory = this.getBMICategory(this.bmi, this.age, this.gender);
  }

  getBMICategory(bmi: number, age: number, gender: string) {
    if (gender === 'male') {
      if (bmi < 20) {
        return 'Underweight';
      } else if (bmi < 25) {
        return 'Normal';
      } else if (bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    } else {
      if (bmi < 19) {
        return 'Underweight';
      } else if (bmi < 24) {
        return 'Normal';
      } else if (bmi < 29) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    }
  }
}
