import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public aroundLogoData: any[] = [];
  public squaredLogoData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.aroundLogoData = this.getData();
    this.squaredLogoData = this.getData();

  }

  public getData(): any[] {
    return [
      {
        imageurl: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        shopName: 'Amazon Shopping',
        description: ''
      },
      {
        imageurl: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        shopName: 'Flipkart Shopping',
        description: ''
      },
      {
        imageurl: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        shopName: 'Myntra Shopping',
        description: ''
      },
      {
        imageurl: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        shopName: 'Prime Shopping',
        description: ''
      }
    ];
  }

}
