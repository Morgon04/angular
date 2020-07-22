import { Component, OnInit } from '@angular/core';
import { BreadcrumService } from 'src/app/core/_services/breadcrum.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {

  constructor(
    private breadCrum: BreadcrumService
  ) { }

  ngOnInit(): void {
  }

}
