import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, OnChanges } from '@angular/core';

// Angular Material Media Import
import { MediaMatcher } from '@angular/cdk/layout';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

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

  // Side Nav Mode variable
  sideNavMode: 'over' | 'side' = 'side';

  mobileQuery: MediaQueryList;

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private coreService: CoreService
  ) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  public ngOnInit(): void {
    this.isSidenavOpened = true;
    this.headerText = 'Learning';
    this.mobileQuery.addEventListener('change', this.sideNavState);
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

  public sideNavChange(event: boolean) {
    if (this.sideNavMode === 'side') {
      this.coreService.setSidenavState(!event);
    }
  }

  // checking Media Query State Change
  public sideNavState(event: MediaQueryListEvent) {
    this.sideNavMode = event.matches ? 'over' : 'side';
  }

}
