import { Component, OnInit, OnDestroy } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-lead-overview',
  templateUrl: './lead-overview.component.html',
  styleUrls: ['./lead-overview.component.scss']
})
export class LeadOverviewComponent implements OnInit, OnDestroy {

  public sideContainerIconList: string[] = [];
  public followupList = [];

  constructor(
    private coreService: CoreService,
  ) { }

  public ngOnInit(): void {

    // Closing the sidenav
    this.coreService.toggleSidenavState(false);

    // Initializing SidenavContainer List
    this.initialSideContainerIconList();

    //
    this.initializeFollowupList();
  }

  public ngOnDestroy(): void {

    // Closing the sidenav
    this.coreService.toggleSidenavState(true);
  }

  public initialSideContainerIconList(): void {
    this.sideContainerIconList = [...this.sideContainerIconList, 'local_phone', 'mail_outline', 'mode_comment'];
  }

  // Initializing Follow up list
  public initializeFollowupList(): void {
    this.followupList = [...this.followupList,
    {
      date: '03/12/2020',
      address: '123 Apt A, New York.'
    },
    {
      date: '07/12/2020',
      address: 'Apt 23 New York.'
    }
    ]
  }

}
