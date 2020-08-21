import { Component, OnInit } from '@angular/core';

// Core Service
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-msd',
  templateUrl: './msd.component.html',
  styleUrls: ['./msd.component.scss']
})
export class MsdComponent implements OnInit {
  public sidenavState: boolean;

  constructor(
    private coreService: CoreService
  ) { }

  public ngOnInit(): void {
    this.coreService.sidenavOpenOrCloseObservable
      .subscribe(
        (response) => {
          this.sidenavState = response;
        }
      );
  }

}
