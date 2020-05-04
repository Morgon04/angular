import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Routing Module
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components Import
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,

    // Angular Material Import
    MatIconModule,
    MatButtonModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
