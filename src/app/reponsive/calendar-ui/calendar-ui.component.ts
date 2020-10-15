import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-ui',
  templateUrl: './calendar-ui.component.html',
  styleUrls: ['./calendar-ui.component.scss']
})
export class CalendarUiComponent implements OnInit {

  public monthsName =
    [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ];

  // Holds list Days in a Month
  public listOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Holds the current Month Property
  public currentMonth = new Date().getMonth();

  // Holds the Date Month
  public dateMonth = new Date().getMonth();

  // Holds the current Year Property
  public currentYear = new Date().getFullYear();

  // Holds the current date of the month
  public currentDate = new Date().getDate();

  // Holds The first day of the current month
  public firstDay: number;

  // Holds the no.of days
  public noOfDays = 32;

  public noOfRows = [0, 1, 2, 3, 4, 5];
  public noOfCols = [0, 1, 2, 3, 4, 5, 6];

  // Holds start Date
  public localDate = [];

  // Holds the generatedDates
  public generatedDates = {};

  // Holds the selected date
  selectedDate = new Date();

  constructor() { }

  public ngOnInit(): void {
    this.constructDays();
  }

  public daysInMonth(): number {
    return this.noOfDays - new Date(this.currentYear, this.currentMonth, 32).getDate();
  }

  public constructDays(): void {

    if (this.generatedDates && this.generatedDates[this.currentMonth]) {
      this.localDate = this.generatedDates[this.currentMonth];
      this.resetSelected();
      return;
    }
    this.localDate = [];
    this.firstDay = (new Date(this.currentYear, this.currentMonth)).getDay();
    let previousMonthLastDate = (new Date(this.currentYear, this.currentMonth, 0)).getDate();
    previousMonthLastDate = previousMonthLastDate - this.firstDay + 1;
    this.selectedDate = new Date();

    let date = 1;

    // tslint:disable-next-line: prefer-for-of
    for (let r = 0; r < this.noOfRows.length; r++) { // looping the rows

      // If date is less than the no of days
      // in  a month, creating column array
      if (date < this.daysInMonth()) {
        this.localDate[r] = [];
      }

      // tslint:disable-next-line: prefer-for-of
      for (let c = 0; c < this.noOfCols.length; c++) {
        if (r === 0 && c < this.firstDay) {
          const isFirstChild = c === 0 && r === 0;
          const isLastChild = c === this.firstDay - 1;
          this.localDate[r][c] =
            { date: previousMonthLastDate, isDisabled: true, isLastChild, isFirstChild };
          previousMonthLastDate++;
        } else if (date > this.daysInMonth()) {
          if (c !== 0) {
            let nextMonth = 1;
            let isFirstChild = true;
            // this.localDate[r] = [];
            while (c < this.noOfCols.length) {
              const isLastChild = c === this.noOfCols.length - 1;
              this.localDate[r][c] = { date: nextMonth, isDisabled: true, isFirstChild, isLastChild };
              nextMonth++;
              c++;
              isFirstChild = false;
            }
          }

          // If date is greater than the no of days
          // in  a month, break the loop
          break;
        } else {
          this.localDate[r][c] = { date, isDisabled: false };
          date++;
        }
      }
    }

    this.generatedDates[this.currentMonth] = this.localDate;
  }

  public navigateMonth(monthNumber: number): void {
    if (monthNumber >= 0 && monthNumber < this.monthsName.length) {
      this.currentMonth = monthNumber;
      this.constructDays();
    }
  }

  public onSelect(col: any): void {
    if (!col.isSelected) {
      if (!col.isDisabled) {
        this.resetSelected();
        col.isSelected = true;
        this.selectedDate = new Date(this.currentYear, this.currentMonth, col.date);
      }
    } else {
      col.isSelected = false;
    }
  }

  public resetSelected(): void {
    this.localDate.forEach((row) => {
      row.forEach((ele: any) => {
        ele.isSelected = false;
      });
    });
  }

}
