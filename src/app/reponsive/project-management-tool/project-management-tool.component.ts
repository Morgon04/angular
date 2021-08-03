import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-management-tool',
  templateUrl: './project-management-tool.component.html',
  styleUrls: ['./project-management-tool.component.scss']
})
export class ProjectManagementToolComponent implements OnInit {

  taskList: { name: string; time: string }[] = [];
  imagesList: string[] = [];
  chatList: { [key: string]: string }[] = [];
  todaysDate = new Date();

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
    this.initializeTaskList();
    this.initializeChatList();
    this.constructDays();
    this.imagesList = [
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
    ];
  }

  public initializeTaskList(): void {
    this.taskList = [...this.taskList,
    {
      name: 'Work on Alsa Project',
      time: '8:00 - 10:00 AM'
    },
    {
      name: 'Team Meeting',
      time: '11:00 - 12:00 AM'
    },
    {
      name: 'Doing Research',
      time: '13:00 - 16:00 PM'
    }
    ];
  }

  public initializeChatList(): void {
    this.chatList = [...this.chatList, {
      message: "Hey @members, how's the project going",
      image: 'data:image/jpeg;base64,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',
      time: '3 minutes ago'
    },
    {
      message: "I'm preparing for user research",
      time: '2 minutes ago'
    },
    {
      message: "@dominica, let me know if you need any help",
      image: 'data:image/jpeg;base64,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',
      time: 'just now'
    }
    ];
  }


  public daysInMonth(): number {
    return this.noOfDays - new Date(this.currentYear, this.currentMonth, 32).getDate();
  }

  public constructDays(): void {

    if (this.generatedDates && this.generatedDates[this.currentMonth]) {
      this.localDate = this.generatedDates[this.currentMonth];
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
            { date: '', isDisabled: false, isLastChild, isFirstChild };
          previousMonthLastDate++;
        } else if (date > this.daysInMonth()) {
          if (c !== 0) {
            let nextMonth = 1;
            let isFirstChild = true;
            // this.localDate[r] = [];
            while (c < this.noOfCols.length) {
              const isLastChild = c === this.noOfCols.length - 1;
              this.localDate[r][c] = { date: '', isDisabled: true };
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

  public isEven(idx: number): boolean {
    return (idx % 2 === 0);
  }

}
