import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Component Import
import { TopicsComponent } from './topics/topics.component';
import { HeadingComponent } from './heading/heading.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    TopicsComponent,
    HeadingComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // Angular Material
    MatSnackBarModule
  ],
  exports: [
    TopicsComponent,
    HeadingComponent,
    SnackBarComponent
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class SharedModule { }
