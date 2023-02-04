import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css'],
})
export class FormButtonsComponent implements OnInit {
  @Input() buttonText: string;
  @Output() submitButtonEmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitButtonClicked() {
    this.submitButtonEmit.emit(null);
  }
}
