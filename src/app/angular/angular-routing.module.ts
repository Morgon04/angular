
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellService } from './../shell/shell.service';

// Component Import
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';


const angularRoutes: Routes = [
  ShellService.child([
    {
      path: '',
      component: LandingPageComponent,
      data: { title: 'Angular' },
      children: [
        { path: '', redirectTo: 'topics', pathMatch: 'full' },
        { path: 'topics', component: TopicsComponent, data: { title: 'Javascript Topics' }, }
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(angularRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
