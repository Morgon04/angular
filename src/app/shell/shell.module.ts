
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Learning Components Import
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    SidenavComponent,
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // Angular Material
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class ShellModule { }
