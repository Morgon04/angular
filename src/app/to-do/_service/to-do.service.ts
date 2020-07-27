import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs Import
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

// Core Service Import
import { CoreService } from 'src/app/core/core.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(
    private httpClient: HttpClient,
    private coreService: CoreService,
  ) { }


  /**
   * returns list to-do's
   */
  public getTodoList(): Observable<any[]> {
    return this.httpClient.get('/to-do/list').pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.coreService.errorHandler)
    );
  }

  /**
   * @param create list
   */
  public createTodo(todo: any): Observable<any> {
    return this.httpClient.post('/to-do/create', todo)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.coreService.errorHandler)
      );
  }

  /**
   * @param update object
   */
  public updateToDo({ taskStatus, value, _id }: any): Observable<any[]> {
    return this.httpClient.patch(`/to-do/update?id=${_id}`, { taskStatus, value })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.coreService.errorHandler)
      );
  }

  public deleteTodo({ _id }: any): Observable<any[]> {
    return this.httpClient.delete(`/to-do/delete-by-id?id=${_id}`)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.coreService.errorHandler)
      );
  }

  public deleteTodos(ids: any[]): Observable<any[]> {
    return this.httpClient.delete(`/to-do/delete-by-ids?id=${JSON.stringify(ids)}`)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.coreService.errorHandler)
      );
  }
}
