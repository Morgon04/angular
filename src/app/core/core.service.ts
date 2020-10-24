import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// RxJs Import
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class ErrorResponse {
  code: string;
  message?: string;
}

export class CoreService {

  public loaderboolean = new BehaviorSubject<boolean>(false);
  public loaderAsObservable = this.loaderboolean.asObservable();


  // Sidenav Open and close Observable
  public sidenavOpenOrClose = new BehaviorSubject<boolean>(false);
  public sidenavOpenOrCloseObservable = this.sidenavOpenOrClose.asObservable();

  public toggleSidenav = new BehaviorSubject<boolean>(true);
  public toggleSidenavObservable = this.toggleSidenav.asObservable();


  constructor() { }

  public errorHandler(errorResponse: HttpErrorResponse) {
    let errorMsg: ErrorResponse;
    if (errorResponse.error instanceof ErrorEvent) {
      errorMsg = {
        code: ''
      };
    } else {
      if (errorResponse.error) {
        const { code, message } = errorResponse.error;
        errorMsg = { code, message };
      }
    }
    return throwError(errorMsg);
  }

  public setLoader(value: boolean): void {
    this.loaderboolean.next(value);
  }

  public setSidenavState(value: boolean): void {
    this.sidenavOpenOrClose.next(value);
  }

  public toggleSidenavState(value: boolean): void {
    this.toggleSidenav.next(value);
  }
}
