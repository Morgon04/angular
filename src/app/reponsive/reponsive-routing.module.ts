// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shell Service Import
import { ShellService } from './../shell/shell.service';

// Component Import
import { ListComponent } from './list/list.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { DevelopersComponent } from './developers/developers.component';
import { DesignComponent } from './design/design.component';
import { GotCastsComponent } from './got-casts/got-casts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MsdComponent } from './msd/msd.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';

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
          },
          {
            path: 'developers',
            component: DevelopersComponent,
            data: { title: 'Responsive Developers' },
          },
          {
            path: 'teams',
            component: DesignComponent,
            data: { title: 'Responsive Teams' },
          },
          {
            path: 'got',
            component: GotCastsComponent,
            data: { title: 'GOT CASTS' },
          },
          {
            path: 'calendar',
            component: CalendarComponent,
            data: { title: 'Responsive Calendar' },
          },
          {
            path: 'course',
            component: CoursesListComponent,
            data: { title: 'Responsive Courses' },
          },
          {
            path: 'msd',
            component: MsdComponent,
            data: { title: 'Mahendra Singh Dhoni' },
          },
          {
            path: 'appointments',
            component: AppointmentsListComponent,
            data: { title: 'Appointment List' },
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
