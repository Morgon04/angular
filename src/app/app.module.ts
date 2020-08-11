// Angular Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module Import
import { ShellModule } from './shell/shell.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// App Component Import
import { AppComponent } from './app.component';

// Angular Material Field Import
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// Flex Layout Import
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    // Core Module
    CoreModule,

    // Shell Module
    ShellModule,

    // Shared Module
    SharedModule,

    // FlexLayoutModule,

    AppRoutingModule // to be last in the import
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
