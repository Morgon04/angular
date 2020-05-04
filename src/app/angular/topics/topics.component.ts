import { Component, OnInit } from '@angular/core';

// Shared Module Model Import
import { Topics } from './../../shared/_model/topics';

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
      { name: 'What is Angular' },
      { name: 'Building Blocks' },
      { name: 'Routing' },
      { name: 'Binding' },
      { name: 'Modules' },
      { name: 'Services' },
    ];
  }

}
