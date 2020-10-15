import { AfterViewInit, OnDestroy } from '@angular/core';
// Angular Import
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

// Service Import
import { ShellService } from './../shell.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Output() eventToggle: EventEmitter<boolean> = new EventEmitter<true>();

  mobileQuery: MediaQueryList;

  headerText = 'Learning';

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(
    private shellService: ShellService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 767px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  public ngOnInit(): void {
    this.shellService.headerText$
      .subscribe((text: string) => {
        if (text) {
          this.headerText = text;
        }
      });
  }

  public ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  // Sidenav Toggle
  public toggleSidenav() {
    this.eventToggle.emit();
  }

  public navigateToAccount(): void {
    this.router.navigateByUrl('/account');
  }

}
