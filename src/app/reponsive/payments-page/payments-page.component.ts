import { Component, OnInit, OnDestroy } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})
export class PaymentsPageComponent implements OnInit, OnDestroy {

  public paymentsHistory: any[] = [];
  constructor(
    private coreService: CoreService
  ) { }

  public ngOnInit(): void {
    // Closing the sidenav
    this.coreService.toggleSidenavState(false);

    // Initialize Payment List
    this.initializePaymentList();
  }

  public ngOnDestroy(): void {
    // Opening the sidenav
    this.coreService.toggleSidenavState(false);
  }

  public initializePaymentList(): void {
    this.paymentsHistory = [{
      name: 'Salary',
      amt: '$21,980.00',
      desc: 'BE133...56'
    },
    {
      name: 'Main',
      amt: '$4,989.00',
      desc: 'BE145...78'
    },
    {
      name: 'For Expenses',
      amt: '$20,080.00',
      desc: 'BE145...78'
    }
    ];
  }

}
