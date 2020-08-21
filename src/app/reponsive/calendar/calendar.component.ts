// Angular Import
import { Component, OnInit } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public calendarItems: any[] = [];
  public sidenavState: boolean;
  public months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  constructor(
    public coreService: CoreService
  ) { }

  public ngOnInit(): void {

    this.initializeCalendarItesm();

    // checking sidenav state
    this.coreService.sidenavOpenOrCloseObservable
      .subscribe(
        (response) => {
          this.sidenavState = response;
        }
      );
  }

  public initializeCalendarItesm(): void {
    this.calendarItems = [
      {
        date: 'Today',
        type: 'Gender',
        count: 2,
        description: 'coincidence'
      },
      {
        date: this.getDateString(1),
        type: 'DocLocal',
        count: 5,
        description: 'coincidence'
      },
      {
        date: this.getDateString(2),
        type: 'Checkbox',
        count: 6,
        description: 'coincidence'
      },
      {
        date: this.getDateString(3),
        type: 'Appbar',
        count: 7,
        description: 'coincidence'
      },
      {
        date: this.getDateString(4),
        type: 'Drawer',
        count: 3,
        description: 'coincidence'
      },
      {
        date: this.getDateString(5),
        type: 'Login',
        count: 8,
        description: 'coincidence'
      },
      {
        date: this.getDateString(6),
        type: 'Main',
        count: 9,
        description: 'coincidence'
      },
      {
        date: this.getDateString(7),
        type: 'content',
        count: 10,
        description: 'coincidence'
      },
      {
        date: this.getDateString(8),
        type: 'Header',
        count: 1,
        description: 'coincidence'
      },
      {
        date: this.getDateString(9),
        type: 'Sidenav',
        count: 7,
        description: 'coincidence'
      },
      {
        date: this.getDateString(10),
        type: 'Responsive',
        count: 6,
        description: 'coincidence'
      },
      {
        date: this.getDateString(11),
        type: 'Colour',
        count: 11,
        description: 'coincidence'
      }
    ];
  }

  public getDateString(count: number): string {
    const date = new Date();
    const newDate = new Date(date.setDate(date.getDate() + count));
    return `${newDate.getDate()} ${this.months[newDate.getMonth()]}`;
  }

}
