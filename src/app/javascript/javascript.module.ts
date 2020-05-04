
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module Import
import { JavascriptRoutingModule } from './javascript-routing.module';

// Javascript Components Import
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';

// Shared Module Import
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    TopicsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,

    // Shared Module
    SharedModule
  ]
})
export class JavascriptModule { }
