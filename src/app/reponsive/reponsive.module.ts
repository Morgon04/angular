// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Import
import { ReponsiveRoutingModule } from './reponsive-routing.module';

// Angular Material Import
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Shared Module Import
import { SharedModule } from '../shared/shared.module';

// Flex Layout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Component Import
import { MsdComponent } from './msd/msd.component';
import { ListComponent } from './list/list.component';
import { TicketComponent } from './ticket/ticket.component';
import { DesignComponent } from './design/design.component';
import { TravelComponent } from './travel/travel.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { GotCastsComponent } from './got-casts/got-casts.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { DevelopersComponent } from './developers/developers.component';
import { CalendarUiComponent } from './calendar-ui/calendar-ui.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { LeadOverviewComponent } from './lead-overview/lead-overview.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { ResponsiveTopicsComponent } from './responsive-topics/responsive-topics.component';
import { ProjectManagementToolComponent } from './project-management-tool/project-management-tool.component';
import { TaskManagementDashboardComponent } from './task-management-dashboard/task-management-dashboard.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    MsdComponent,
    ListComponent,
    DesignComponent,
    TravelComponent,
    TicketComponent,
    ProjectsComponent,
    CalendarComponent,
    ExpensesComponent,
    GotCastsComponent,
    TaskBoardComponent,
    DevelopersComponent,
    CalendarUiComponent,
    HrDashboardComponent,
    PaymentsPageComponent,
    TeamMembersComponent,
    CoursesListComponent,
    LeadOverviewComponent,
    CandidateListComponent,
    AppointmentsListComponent,
    MedicalDashboardComponent,
    ResponsiveTopicsComponent,
    ProjectManagementToolComponent,
    TaskManagementDashboardComponent,
    KnowledgeComponent,
    PortfolioComponent,
    PdfviewerComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatIconModule,
    DragDropModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    PdfViewerModule,
    
    // Shared Module
    SharedModule,

    // FlexLayout Module
    FlexLayoutModule,

    // Routing Module
    ReponsiveRoutingModule
  ]
})
export class ReponsiveModule { }
