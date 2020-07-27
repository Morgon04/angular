// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Import
import { ReponsiveRoutingModule } from './reponsive-routing.module';

// Shared Module Import
import { SharedModule } from '../shared/shared.module';

// Component Import
import { ListComponent } from './list/list.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { ResCandidatesComponent } from './res-candidates/res-candidates.component';


@NgModule({
  declarations: [
    ListComponent,
    ResponsiveTopicsComponent,
    ResCandidatesComponent
  ],
  imports: [
    CommonModule,

    // Shared Module
    SharedModule,

    // Routing Module
    ReponsiveRoutingModule
  ]
})
export class ReponsiveModule { }
