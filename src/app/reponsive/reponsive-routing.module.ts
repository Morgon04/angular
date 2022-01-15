import { HtmlComponent } from './../html/html.component';
// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shell Service Import
import { ShellService } from './../shell/shell.service';

// Component Import
import { MsdComponent } from './msd/msd.component';
import { ListComponent } from './list/list.component';
import { TravelComponent } from './travel/travel.component';
import { DesignComponent } from './design/design.component';
import { TicketComponent } from './ticket/ticket.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { GotCastsComponent } from './got-casts/got-casts.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalendarUiComponent } from './calendar-ui/calendar-ui.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { LeadOverviewComponent } from './lead-overview/lead-overview.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { ProjectManagementToolComponent } from './project-management-tool/project-management-tool.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';

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
          },
          {
            path: 'tickets',
            component: TicketComponent,
            data: { title: 'Hot Tickets' },
          },
          {
            path: 'team-members',
            component: TeamMembersComponent,
            data: { title: 'Team Members' },
          },
          {
            path: 'expenses',
            component: ExpensesComponent,
            data: { title: 'Expenses' },
          },
          {
            path: 'medical-dashboard',
            component: MedicalDashboardComponent,
            data: { title: 'Medical Expenses' },
          },
          {
            path: 'calendar-ui',
            component: CalendarUiComponent,
            data: { title: 'Calendar UI' },
          },
          {
            path: 'task-board',
            component: TaskBoardComponent,
            data: { title: 'Task Board' },
          },
          {
            path: 'hr-dashboard',
            component: HrDashboardComponent,
            data: { title: 'Task Board' },
          },
          {
            path: 'projects',
            component: ProjectsComponent,
            data: { title: 'Projects Dashboard' },
          },
          {
            path: 'payments',
            component: PaymentsPageComponent,
            data: { title: 'Payments Dashboard' },
          },
          {
            path: 'html',
            component: HtmlComponent,
            data: { title: 'HTML PAGE' },
          },
          {
            path: 'lead-overview',
            component: LeadOverviewComponent,
            data: { title: 'Lead Overview' },
          },
          {
            path: 'travel-dashboard',
            component: TravelComponent,
            data: { title: 'Travel Dashboard' },
          },
          {
            path: 'project-management',
            component: ProjectManagementToolComponent,
            data: { title: 'Project Management'}
          },
          {
            path: 'pdf-viewer',
            component: PdfviewerComponent,
            data: { title: 'PDF Viewer'}
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
