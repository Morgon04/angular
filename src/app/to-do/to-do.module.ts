// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Angular Material Import
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';

// To do Routing module Import
import { ToDoRoutingModule } from './to-do-routing.module';

// To do Components import
import { ToDoComponent } from './to-do/to-do.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ToDoComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,

    // HttpClient Module
    HttpClientModule,

    // Angular Form ModuleF
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatSnackBarModule,
    MatBadgeModule,

    // Shared Module
    SharedModule,

    // Routing
    ToDoRoutingModule
  ]
})
export class ToDoModule { }
