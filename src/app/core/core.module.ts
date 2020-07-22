// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptor Import
import { ApiPrefixInterceptor } from './_services/api.prefix.interceptor';

// Core Service Import
import { CoreService } from './core.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    CoreService
  ]
})
export class CoreModule { }
