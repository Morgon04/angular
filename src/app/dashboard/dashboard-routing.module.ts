
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Layout Module Service
import { ShellService } from './../shell/shell.service';

// Components Import
import { DashboardComponent } from './dashboard.component';



const dashboardRoutes: Routes = [
  ShellService.child([
    { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
