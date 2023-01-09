import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calories-burned',
  templateUrl: './calories-burned.component.html',
  styleUrls: ['./calories-burned.component.css'],
})
export class CaloriesBurnedComponent implements OnInit {
  activity: string;
  weight: number;
  duration: number;
  caloriesBurned: number;

  constructor() {}

  ngOnInit(): void {}

  calculateCaloriesBurned() {
    let caloriesBurned: number;
    switch (this.activity) {
      case 'walking':
        caloriesBurned = this.weight * this.duration * 0.06;
        break;
      case 'jogging':
        caloriesBurned = this.weight * this.duration * 0.09;
        break;
      case 'skipping_rope':
        caloriesBurned = this.weight * this.duration * 0.1;
        break;
      case 'swimming':
        caloriesBurned = this.weight * this.duration * 0.11;
        break;
      case 'sexual_activity':
        caloriesBurned = this.weight * this.duration * 0.15;
        break;
    }
    this.caloriesBurned = caloriesBurned;
  }
}
