import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Event} from '../../../entity/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() getEvents: Event;
  monthNow;
  month;
  year;
  numberOfDays;
  daysArray;
  dateForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.initDateForm();
  }

  public initDateForm() {
    this.dateForm = this.fb.group({
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.monthNow = moment();
    this.numberOfDays = moment(this.year + '-' + this.month, 'YYYY-MMMM').day();
    this.daysArray = CalendarComponent.createCalendar(this.monthNow);
  }

  nextMonth() {
    this.monthNow.add(1, 'M');
    this.daysArray = CalendarComponent.createCalendar(this.monthNow);
  }

  previous() {
    this.monthNow.subtract(1, 'M');
    this.daysArray = CalendarComponent.createCalendar(this.monthNow);
  }

  private static createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number)
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });
    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }

  todayCheck(day) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }

  sundayCheck(day) {
    if (!day) {
      return false;
    }
    return day.format('d') === '0';
  }

  isSelected(day) {
    if (!day) {
      return false;
    }
    let dateFrom = moment(this.dateForm.value.dateFrom, 'MM/DD/YYYY');
    let dateTo = moment(this.dateForm.value.dateTo, 'MM/DD/YYYY');

    if (this.dateForm.valid) {
      return dateFrom.isSameOrBefore(day) && dateTo.isSameOrAfter(day);
    }

    if (this.dateForm.get('dateFrom').valid) {
      return dateFrom.isSame(day);
    }
  }

  selectedDay(day) {
    let dateFormatted = day.format('MM/DD/YYYY');
    if (this.dateForm.valid) {
      this.dateForm.setValue({dateFrom: null, dateTo: null});
      return;
    }
    if (!this.dateForm.get('dateFrom').value) {
      this.dateForm.get('dateFrom').patchValue(dateFormatted);
    } else {
      this.dateForm.get('dateTo').patchValue(dateFormatted);
    }
  }
}
