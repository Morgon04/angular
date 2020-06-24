import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-functions',
  templateUrl: './js-functions.component.html',
  styleUrls: ['./js-functions.component.scss']
})
export class JsFunctionsComponent implements OnInit {

  public functionsTopicsList: any[] = [];

  public url: string;
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.url = this.router.url;
    if (this.url.split('#').length > 0) {
      this.url = this.url.split('#')[0].toString();
    }
    this.functionsTopicsList = this.initializeFunctionTopics();
  }

  public initializeFunctionTopics(): any[] {
    return [
      { name: 'Define Functions', id: 'define-function' },
      { name: 'Function return or Void', id: 'function-return-or-void' },
      { name: 'Function Experssion', id: 'function-exp' },
      { name: 'Types of Function Experssion', id: 'function-exp-types' },
      { name: 'Diff btw function and Function Experssion', id: 'diff-btw-fn-and-fn-exp' }
    ];
  }

  public scrollTo(id: any): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
