import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Layout Module Import
import { ShellModule } from './shell/shell.module';

// App Component Import
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Shell Module
    ShellModule,

    AppRoutingModule // to be last in the import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
