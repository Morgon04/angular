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

  public paymentNav: any[] = [];

  public paymentsList: any[] = [];

  constructor(
    private coreService: CoreService
  ) { }

  public ngOnInit(): void {
    // Closing the sidenav
    this.coreService.toggleSidenavState(false);

    // Initialize Payment List
    this.initializePaymentList();

    this.paymentNav = [
      {
        name: 'All',
        active: true
      },
      {
        name: 'Draft',
        active: false
      },
      {
        name: 'Pending',
        active: false
      },
      {
        name: 'Paid',
        active: false
      }
    ];

    // Initialize Payment table list
    this.initializePaymentTableList();
  }

  public ngOnDestroy(): void {
    // Opening the sidenav
    this.coreService.toggleSidenavState(false);
  }

  public changeState(item: any, state: string) {
    if (item.name !== 'All') {
      item.active = state === 'over' ? true : false;
      return;
    }
    item.active = true;
    return;
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

  public initializePaymentTableList(): void {
    this.paymentsList = [
      {
        name: 'Online Purchase at Amazon.com',
        status: 'Draft',
        amount: '$420.00',
        medium: 'Amazon',
        date: '10 Nov 2019',
        id: '#127'
      },
      {
        name: 'Payment for Delivery',
        status: 'Pending',
        amount: '$20.00',
        medium: 'VideoSmart',
        date: '04 Nov 2019',
        id: '#128'
      },
      {
        name: 'Online Purchase at eBay.com',
        status: 'Paid',
        amount: '$2690.00',
        medium: 'eBay',
        date: '12 Oct 2019',
        id: '#129'
      },
      {
        name: 'Salary Payment',
        status: 'Pending',
        amount: '$7209.00',
        medium: 'Office Network',
        date: '10 Oct 2019',
        id: '#130'
      },
      {
        name: 'Payment Service',
        status: 'Paid',
        amount: '$50.00',
        medium: 'Car repair service',
        date: '09 Oct 2019',
        id: '#127'
      },
      {
        name: 'Payment for Mobile Phone',
        status: 'Paid',
        amount: '$30.00',
        medium: 'Vodafone',
        date: '09 Oct 2019',
        id: '#127'
      }
    ];
  }

}
