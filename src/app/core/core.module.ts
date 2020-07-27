// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Shared Module Import
import { SharedModule } from './../shared/shared.module';

// Interceptor Import
import { ApiLoaderInterceptor } from './_services/api.loader.interceptor';
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
    CoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiLoaderInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }
