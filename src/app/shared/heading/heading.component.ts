
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// RxJS Import
import { filter } from 'rxjs/internal/operators/filter';

// Core Service Import
import { BreadcrumService } from './../../core/_services/breadcrum.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() breadCrumList: any[] = [];
  @Input() headerText: string;

  constructor(
    private router: Router,
    private breadCrum: BreadcrumService
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.getBreadCrumData(val.url);

      });
  }

  public ngOnInit(): void {
  }

  public getBreadCrumData(url: string): void {
    this.breadCrumList = this.breadCrum.getBreadCrums(url);
  }

}
