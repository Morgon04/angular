import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

// Angular Material Media Import
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy, AfterViewInit {

  // sidenav properites
  public isSidenavOpened: boolean;

  // header properties
  public headerText: string;

  mobileQuery: MediaQueryList;

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  public ngOnInit(): void {
    this.isSidenavOpened = true;
    this.headerText = 'Learning';
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  public settingHeaderText(event: string) {
    this.headerText = `Learning - ${event}`;
  }

}
