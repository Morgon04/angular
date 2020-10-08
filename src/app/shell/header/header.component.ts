// Angular Import
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// Service Import
import { ShellService } from './../shell.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() eventToggle: EventEmitter<boolean> = new EventEmitter<true>();

  headerText = 'Learning';
  constructor(
    private shellService: ShellService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.shellService.headerText$
      .subscribe((text: string) => {
        if (text) {
          this.headerText = text;
        }
      });
  }

  // Sidenav Toggle
  public toggleSidenav() {
    this.eventToggle.emit();
  }

  public navigateToAccount(): void {
    this.router.navigateByUrl('account');
  }

}
