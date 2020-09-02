import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-topics',
  templateUrl: './responsive-topics.component.html',
  styleUrls: ['./responsive-topics.component.scss']
})
export class ResponsiveTopicsComponent implements OnInit {

  public responsiveTopicsList: { name: string, url: string }[] = [];

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {

    this.responsiveTopicsList = [
      {
        name: 'Candidates List',
        url: '/responsive/candidates'
      },
      {
        name: 'Developers',
        url: '/responsive/developers'
      },
      {
        name: 'Team Design',
        url: '/responsive/teams'
      },
      {
        name: 'GOT CASTS',
        url: '/responsive/got'
      },
      {
        name: 'Calendar',
        url: '/responsive/calendar'
      },
      {
        name: 'Courses',
        url: '/responsive/course',
      },
      {
        name: 'MSD',
        url: '/responsive/msd',
      },
      {
        name: 'Appointments List',
        url: '/responsive/appointments',
      },
      {
        name: 'Hot Tickets',
        url: '/responsive/tickets',
      }
    ];
  }

  public navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }

}
