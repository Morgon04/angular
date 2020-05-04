import { Component, OnInit, Input } from '@angular/core';
import { Topics } from '../_model/topics';


@Component({
  selector: 'app-shared-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  @Input() public topicsList: Topics[] = [];

  public mouseOvered: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
    this.topicsList.forEach((_, idx) => this.mouseOvered[idx] = false);
  }

}
