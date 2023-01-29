import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDateStruct,
  NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-range-popup',
  templateUrl: './datepicker-range-popup.component.html',
  styleUrls: ['./datepicker-range-popup.component.css'],
})
export class DatepickerRangePopupComponent {
  model: NgbDateStruct;
  @ViewChild('d') datepicker: NgbInputDatepicker;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.selectToday();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  navigate(increment: number) {
    let nextDate = new NgbDate(
      this.model.year,
      this.model.month,
      this.model.day + increment
    );
    this.model = nextDate;
  }

  get displayDate(): string {
    const date = new Date(
      this.model.year,
      this.model.month - 1,
      this.model.day
    );
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
}
