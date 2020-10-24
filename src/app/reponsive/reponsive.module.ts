// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Import
import { ReponsiveRoutingModule } from './reponsive-routing.module';

// Angular Material Import
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Shared Module Import
import { SharedModule } from '../shared/shared.module';

// Flex Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Component Import
import { MsdComponent } from './msd/msd.component';
import { ListComponent } from './list/list.component';
import { TicketComponent } from './ticket/ticket.component';
import { DesignComponent } from './design/design.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { GotCastsComponent } from './got-casts/got-casts.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalendarUiComponent } from './calendar-ui/calendar-ui.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    MsdComponent,
    ListComponent,
    DesignComponent,
    TicketComponent,
    CalendarComponent,
    ExpensesComponent,
    GotCastsComponent,
    TaskBoardComponent,
    DevelopersComponent,
    CalendarUiComponent,
    TeamMembersComponent,
    CoursesListComponent,
    CandidateListComponent,
    AppointmentsListComponent,
    MedicalDashboardComponent,
    ResponsiveTopicsComponent,
    HrDashboardComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    DragDropModule,

    // Shared Module
    SharedModule,

    // FlexLayout Module
    FlexLayoutModule,

    // Routing Module
    ReponsiveRoutingModule
  ]
})
export class ReponsiveModule { }
