
// Angular Import
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

// RxJs Import
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/internal/operators/finalize';

// Angular Material Import
import { MatSnackBar } from '@angular/material/snack-bar';

// Core Service Import
import { CoreService } from '../core.service';

// Snack bar component Import
import { SnackBarComponent } from './../../shared/snack-bar/snack-bar.component';

@Injectable()
export class ApiLoaderInterceptor implements HttpInterceptor {
    constructor(
        private snackBar: MatSnackBar,
        private coreService: CoreService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.coreService.setLoader(true);
        return next.handle(request)
            .pipe(
                map((event) => {
                    if (event instanceof HttpResponse) {
                        if (event.body && event.body.hasOwnProperty('code') && event.body.code === 200) {
                            this.openSnackBar(event.body.message);
                        }
                    }
                    return event;
                }),
                finalize(() => {
                    this.coreService.setLoader(false);
                })
            );
    }

    public openSnackBar(message: string) {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: { message },
            duration: 3000
        });
    }
}
