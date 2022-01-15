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
      },
      {
        name: 'Team Members',
        url: '/responsive/team-members',
      },
      {
        name: 'Expenses',
        url: '/responsive/expenses',
      },
      {
        name: 'Medical Dashboard',
        url: '/responsive/medical-dashboard',
      },
      {
        name: 'Calendar UI',
        url: '/responsive/calendar-ui'
      },
      {
        name: 'Task Board',
        url: '/responsive/task-board'
      },
      {
        name: 'HR Dashboard',
        url: '/responsive/hr-dashboard'
      },
      {
        name: 'Projects Dashboard',
        url: '/responsive/projects'
      },
      {
        name: 'Payments',
        url: '/responsive/payments'
      },
      {
        name: 'HTML',
        url: '/responsive/html'
      },
      {
        name: 'Lead Overview',
        url: '/responsive/lead-overview'
      },
      {
        name: 'Travel Dashboard',
        url: '/responsive/travel-dashboard'
      },
      {
        name: 'Project Management',
        url: '/responsive/project-management'
      },
      {
        name: 'Task Management Board',
        url: '/task-management'
      },
      {
        name: 'Portfolio Dashboard',
        url: '/portfolio'
      },
      {
        name: 'PDF Viewer',
        url: '/responsive/pdf-viewer'
      }
    ];
  }

  public navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }

}
