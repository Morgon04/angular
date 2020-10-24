// Angular Import
import { Component, OnInit } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public showHeading = true;
  constructor(
    private coreService: CoreService
  ) { }

  public ngOnInit(): void {
    this.coreService.toggleSidenavObservable
      .subscribe((response: boolean) => {
        this.showHeading = response;
      });
  }

}
