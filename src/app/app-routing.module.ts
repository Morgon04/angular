import { TaskManagementDashboardComponent } from './reponsive/task-management-dashboard/task-management-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',

  useHash: false
};

const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule)
  },
  {
    path: 'responsive',
    loadChildren: () => import('./reponsive/reponsive.module').then(m => m.ReponsiveModule)
  },

  {
    path: 'task-management',
    component: TaskManagementDashboardComponent
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, routerOptions)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
