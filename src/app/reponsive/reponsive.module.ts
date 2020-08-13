// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Import
import { ReponsiveRoutingModule } from './reponsive-routing.module';

// Angular Material Import
import { MatIconModule } from '@angular/material/icon';

// Shared Module Import
import { SharedModule } from '../shared/shared.module';

// Flex Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Component Import
import { ListComponent } from './list/list.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DevelopersComponent } from './developers/developers.component';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    ListComponent,
    ResponsiveTopicsComponent,
    CandidateListComponent,
    DevelopersComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,

    MatIconModule,

    // Shared Module
    SharedModule,

    // FlexLayout Module
    FlexLayoutModule,

    // Routing Module
    ReponsiveRoutingModule
  ]
})
export class ReponsiveModule { }
