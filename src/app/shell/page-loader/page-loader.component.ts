import { Component, OnInit } from '@angular/core';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  public showPageLoader = true;
  constructor(
    private coreService: CoreService
  ) { }

  public ngOnInit(): void {

    console.log('Page Loaded');
    this.coreService.loaderAsObservable.subscribe(
      (response: boolean) => {
        this.showPageLoader = response;
      }
    );
  }

}
