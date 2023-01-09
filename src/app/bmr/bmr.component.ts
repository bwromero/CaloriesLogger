import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css'],
})
export class BmrComponent implements OnInit {
  weight;
  height;
  age;
  gender;
  bmr;

  constructor() {}

  ngOnInit(): void {}

  calculateBMR() {
    let bmr: number;
    if (this.gender === 'male') {
      bmr = 66 + 13.7 * this.weight + 5 * this.height - 6.8 * this.age;
    } else {
      bmr = 655 + 9.6 * this.weight + 1.8 * this.height - 4.7 * this.age;
    }
    this.bmr = bmr;
  }
}
