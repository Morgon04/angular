import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// Service Import
import { ShellService } from '../shell.service';

interface SideNav {
  name: string;
  url: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public publicSideNavItems: SideNav[] = [];

  constructor(
    private shellService: ShellService
  ) { }

  public ngOnInit(): void {
    this.publicSideNavItems = this.initializeSideNavItems();
  }

  public initializeSideNavItems(): SideNav[] {
    return [
      { name: 'Angular (Ng)', url: '/angular' },
      { name: 'Javascript (Js)', url: '/javascript' }
    ];
  }

  public setHeaderText(item: SideNav): void {
    this.shellService.setHeaderText(item.name);
    // this.router.navigateByUrl(item.url);
  }

}
