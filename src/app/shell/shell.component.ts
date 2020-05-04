import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  // sidenav properites
  public isSidenavOpened: boolean;

  // header properties
  public headerText: string;

  constructor() { }

  ngOnInit(): void {
    this.isSidenavOpened = true;
    this.headerText = 'Learning';
  }

  public settingHeaderText(event: string) {
    this.headerText = `Learning - ${event}`;
  }

}
