// Angular Import
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

// Angular Materia Import
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// RxJs Import
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

// To do service Import
import { ToDoService } from './../_service/to-do.service';

// Snack bar component Import
import { SnackBarComponent } from './../../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('tabletodo') table: MatTable<any>;

  public displayedColumns: string[];
  public dataSource: any;
  public todoList: any[] = [];
  public selection = new SelectionModel<any>(true, []);

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private todoService: ToDoService
  ) { }

  public ngOnInit(): void {

    this.displayedColumns = ['select', 'name', 'value', 'priority', 'comment', 'date', 'action'];
    this.dataSource = [];
    this.getTodoList();
  }

  public getTodoList(): void {
    this.todoService.getTodoList().subscribe(
      ((response: any) => {
        this.dataSource = response && response.responseContent ? response.responseContent : [];
        this.table.renderRows();
      })
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach((row: any) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  // route to create page
  public routeToCreate(): void {
    this.router.navigateByUrl('/to-do/create');
  }

  // drag and drop change event
  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.renderTableRows();
  }


  public findTodoIndex(id: number): number {
    return this.dataSource.findIndex((d: any) => d._id === id);
  }

  // updating task status
  public updateTodoStatus(ele: any): any {
    ele.taskStatus = ele.taskStatus === 'Start' ? 'In Progress' : 'Completed';
    ele.value = ele.taskStatus === 'In Progress' ? 50 : 100;
    return ele;
  }

  public updaeTodoTable(ele: any, content: any) {
    const idx = this.findTodoIndex(ele._id);
    if (idx >= 0 && content) {
      this.dataSource[idx] = content;

    }
  }

  public renderTableRows(): void {
    this.table.renderRows();
  }


  // update To do list to
  public updateTodo(ele: any): void {
    if (ele.taskStatus === 'Completed') {
      this.openSnackBar(`${ele.name} is in completed stauts. Cannot be updated`);
      return;
    }
    ele = this.updateTodoStatus(ele);
    this.todoService.updateToDo(ele)
      .subscribe(
        (({ responseContent, message, code }: any) => {
          if (code === 200) {
            this.openSnackBar(message);
          }
          this.updaeTodoTable(ele, responseContent);
          this.renderTableRows();
        })
      );
  }

  public multiUpdateTodo(): void {
    if (this.selection.selected.length === 0) {
      return;
    }
    this.selection.selected.forEach((sel: any) => {
      sel = this.updateTodoStatus(sel);
    }); // updating selected task status

    forkJoin(this.selection.selected.map((sel: any) => this.todoService.updateToDo(sel)))
      .subscribe(
        ((responses: any[]) => {
          this.selection.clear();
          responses.forEach((res) => {
            this.updaeTodoTable(res, res);
          });
          this.renderTableRows();
          this.openSnackBar(responses[0].message);
        }),
        (error => {
          console.log(error);
        })
      );


  }

  // delete to do
  public deleteTodo(ele: any): void {
    this.todoService.deleteTodo(ele)
      .subscribe(
        (({ message, code }: any) => {
          if (code === 200) {
            this.openSnackBar(message);
          }
          const idx = this.findTodoIndex(ele._id);
          if (idx >= 0) {
            this.dataSource.splice(idx, 1);
            this.renderTableRows();
          }
        })
      );
  }

  public openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: { message },
      duration: 3000
    });
  }

}
