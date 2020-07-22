
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout Service Import
import { ShellService } from '../shell/shell.service';

// To do Component Import
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ToDoComponent } from './to-do/to-do.component';

const toDoRoutes: Routes = [
  ShellService.child([
    {
      path: '',
      component: ToDoComponent,
      data: { title: 'To Do' },
      children: [
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: 'list',
          component: ListComponent,
          data: {
            title: 'To do List'
          }
        },
        {
          path: 'create',
          component: CreateComponent,
          data: {
            title: 'Create To do List'
          }
        }
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(toDoRoutes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
