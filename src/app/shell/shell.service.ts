import { Routes, Route } from '@angular/router';
import { Injectable } from '@angular/core';

// Component Import
import { ShellComponent } from './shell.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShellService {

  public headerText = new BehaviorSubject<string>('');
  public headerText$ = this.headerText.asObservable();
  constructor() { }

  static child(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data: { reuse: true }
    };
  }

  setHeaderText(text: string): void {
    this.headerText.next(text);
  }
}
