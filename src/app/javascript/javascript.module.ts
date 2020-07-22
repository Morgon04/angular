// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatCardModule } from '@angular/material/card';

// Routing Module Import
import { JavascriptRoutingModule } from './javascript-routing.module';

// Core Module Import
import { CoreModule } from '../core/core.module';

// Shared Module Import
import { SharedModule } from './../shared/shared.module';

// Javascript Components Import
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';
import { JsBasicsComponent } from './js-basics/js-basics.component';
import { JsFunctionsComponent } from './js-functions/js-functions.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    TopicsComponent,
    JsBasicsComponent,
    JsFunctionsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,

    // Angular Material
    MatCardModule,

    // Shared Module
    SharedModule,

    // Core Module
    CoreModule
  ]
})
export class JavascriptModule { }
