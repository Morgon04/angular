
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// RxJS Import
import { filter } from 'rxjs/internal/operators/filter';

// Shell Service Import
import { ShellService } from './../shell/shell.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboardData: any[] = [];

  constructor(
    private router: Router,
    private shellService: ShellService
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        if (val.url === '/dashboard') {
          this.shellService.setHeaderText(`Learning`);
        }
      });
  }

  ngOnInit(): void {
    this.dashboardData = this.getData();

  }

  public getData(): any[] {
    return [
      {
        imageUrl: 'https://cdn.auth0.com/blog/angular5/logo.png',
        courseName: 'Angular 2+',
        description: 'Angular is front end framework, which is powered by google',
        url: '/angular'
      },
      {
        imageUrl: 'https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png',
        courseName: 'Javascript',
        description: 'Javascript is a scripting Language, which is executed in browsers',
        url: '/javascript'
      },
      {
        imageUrl: 'https://miro.medium.com/max/1000/1*fsseXIPGEhwmg6kfgXyIjA.jpeg',
        courseName: 'Node Js',
        description: 'Node JS is a server side scripting language, which is powered by google V8 engine',
        url: ''
      },
      {
        imageUrl: 'https://media.prod.mdn.mozit.cloud/attachments/2014/11/18/9461/012655e623bef579c9bd376e227bc648/css-declaration-small.png',
        courseName: 'CSS',
        description: 'Cascading style sheets are used to format the layout of Web pages.',
        url: ''
      }
    ];
  }

}
