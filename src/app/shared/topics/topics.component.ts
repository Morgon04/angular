import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Topics } from '../_model/topics';

@Component({
  selector: 'app-shared-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  @Input() public topicsList: Topics[] = [];

  public mouseOvered: boolean[] = [];
  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.topicsList.forEach((_, idx) => this.mouseOvered[idx] = false);
  }

  public navigateTo(topic: Topics): void {
    this.router.navigateByUrl(topic.url);
  }

}
