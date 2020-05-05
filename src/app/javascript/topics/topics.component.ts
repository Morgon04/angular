import { Component, OnInit } from '@angular/core';

// Shared Module Model Import
import { Topics } from 'src/app/shared/_model/topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  public topics: Topics[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.topics = this.initializeTopics();
  }

  public initializeTopics(): Topics[] {
    return [
      { name: 'Js Basics', url: '/javascript/basics' },
      { name: 'Js Function' },
      { name: 'Js Array []' },
      { name: 'Js Objects {}' },
      { name: 'ES6 Promises' },
      { name: 'ES6 Destructuring' },
    ];
  }

}
