import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// RxJs Import
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})

export class ErrorResponse {
  code: string;
  message?: string;
}

export class CoreService {

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
}
