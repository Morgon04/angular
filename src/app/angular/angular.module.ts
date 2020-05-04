import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module Import
import { AngularRoutingModule } from './angular-routing.module';

// Shared Module Import
import { SharedModule } from '../shared/shared.module';

// Angular Components
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    TopicsComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,

    // Shared Module Import
    SharedModule
  ]
})
export class AngularModule { }
