import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  preview(event) {
    let frame = document.getElementById('frame') as HTMLImageElement;

    frame.src = URL.createObjectURL(event.target.files[0]);
  }
}
