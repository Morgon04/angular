// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatCardModule } from '@angular/material/card';

// Routing Module Import
import { JavascriptRoutingModule } from './javascript-routing.module';

// Javascript Components Import
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';
import { JsBasicsComponent } from './js-basics/js-basics.component';

// Shared Module Import
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    TopicsComponent,
    JsBasicsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,

    // Angular Material
    MatCardModule,

    // Shared Module
    SharedModule
  ]
})
export class JavascriptModule { }
