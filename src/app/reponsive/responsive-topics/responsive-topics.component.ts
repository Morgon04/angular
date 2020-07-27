import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-topics',
  templateUrl: './responsive-topics.component.html',
  styleUrls: ['./responsive-topics.component.scss']
})
export class ResponsiveTopicsComponent implements OnInit {

  public responsiveTopicsList: { name: string, url: string }[] = [];
  constructor() { }

  public ngOnInit(): void {

    this.responsiveTopicsList = [
      {
        name: 'Candidates List',
        url: '/responsive/candidates'
      },
      {
        name: 'Dashboard',
        url: '/responsive/candidates'
      },
      {
        name: 'Angular Table',
        url: '/responsive/candidates'
      },
      {
        name: 'Angular Datepicker',
        url: '/responsive/candidates'
      },
      {
        name: 'Candidates List',
        url: '/responsive/candidates'
      },
      {
        name: 'Candidates List',
        url: '/responsive/candidates'
      }
    ];
  }

}
