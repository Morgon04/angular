// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shell Service Import
import { ShellService } from './../shell/shell.service';

// Component Import
import { ListComponent } from './list/list.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

const responsiveRoutes: Routes = [
  ShellService.child(
    [
      {
        path: '',
        component: ListComponent,
        data: { title: 'Responsive UI' },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ResponsiveTopicsComponent,
            data: { title: 'Responsive List' },
          },
          {
            path: 'candidates',
            component: CandidateListComponent,
            data: { title: 'Responsive Candidates' },
          }
        ]
      }
    ]
  )];

@NgModule({
  imports: [RouterModule.forChild(responsiveRoutes)],
  exports: [RouterModule]
})
export class ReponsiveRoutingModule { }
