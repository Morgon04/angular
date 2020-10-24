import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit, OnDestroy {

  public spinnerDiameter = 150;
  public percentage = 15;

  public navList = [
    {
      name: 'Dashboard',
      active: true
    },
    {
      name: 'People',
      active: false
    },
    {
      name: 'Tickets',
      active: false
    }
  ];

  public dashboardList: any[] = [];

  constructor(
    private coreService: CoreService,
    private router: Router) { }

  public ngOnInit(): void {
    this.coreService.toggleSidenavState(false);
    this.initializeDashboardList();
  }

  public ngOnDestroy(): void {
    this.coreService.toggleSidenavState(true);
  }

  public changeState(item: any, state: string) {
    if (item.name !== 'Dashboard') {
      item.active = state === 'over' ? true : false;
      return;
    }
    item.active = true;
    return;
  }

  public initializeDashboardList(): void {
    this.dashboardList = [
      {
        name: 'Mark Thompson',
        date: '08-04-2019',
        icon: 'cloud_download',
        desc: 'Holiday request'
      },
      {
        name: 'Tillie calrson',
        date: '07-03-2019',
        icon: 'verified',
        desc: 'Certificate of employment'
      },
      {
        name: 'Corey Gross',
        date: '04-17-2019',
        icon: 'hourglass_top',
        desc: 'Half-time application'
      },
      {
        name: 'Harriet McGurie',
        date: '07-07-2019',
        icon: 'cloud_download',
        desc: 'Holiday Request'
      },
      {
        name: 'Larry Christensen',
        date: '04-18-2019',
        icon: '',
        desc: 'Sick leave'
      },
      {
        name: 'Elnora Poole',
        date: '08-04-2019',
        icon: 'verified',
        desc: 'Certificate of employment'
      },
      {
        name: 'Sally Rhodes',
        date: '03-11-2019',
        icon: 'verified',
        desc: 'Holiday Request'
      },
      {
        name: 'Philip Ryan',
        date: '02-25-2019',
        icon: 'verified',
        desc: 'New born'
      }
    ];
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/responsive/list');
  }

}
