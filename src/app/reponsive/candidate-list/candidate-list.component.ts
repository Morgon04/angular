import { Component, OnInit } from '@angular/core';

// Core Serive Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  public sidenavState: boolean;

  constructor(
    private coreService: CoreService,
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
