// Angular Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Module Import
import { ShellModule } from './shell/shell.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';


// App Component Import
import { AppComponent } from './app.component';

// Angular Material Field Import
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HtmlComponent } from './html/html.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent // 1. Component 2. Directives 3. Pipes
  ],
  imports: [ // 1.Angular Module 2.Feature Module
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    // Core Module
    CoreModule,

    // Shell Module
    ShellModule,

    // Shared Module
    SharedModule,

    // Account Module
    AuthenticationModule,

    AppRoutingModule, // to be last in the import,

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
