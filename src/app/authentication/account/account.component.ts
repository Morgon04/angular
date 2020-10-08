import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// RxJS Import
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public activatedUrl: string;
  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {

    // getting active url on page reload
    this.activatedUrl = `/${window.location.toString().split('/').slice(3, 5).join('/')}`;

    // getting active url on page navigation
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    onNavigationEnd.pipe(
      map(() => this.router.url))
      .subscribe(
        (event: string) => this.activatedUrl = event);
  }

  public reroute(router: 'sign-in' | 'sign-up'): void {
    this.router.navigateByUrl(`/account/${router}`);
  }

}
