// Angular Import
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

// Angular Material Module
import { MatSnackBar } from '@angular/material/snack-bar';

// Service Import
import { ToDoService } from '../_service/to-do.service';

// Reactive Form Custom Validators Import
import { ReactiveFormCustomValidators } from 'src/app/core/reactive-form-custom-validators';

// Component Import
import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public todoCreate: FormGroup;
  public mutlipleTodos: boolean;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private todoService: ToDoService
  ) { }

  public ngOnInit(): void {
    this.initializeTodoFormGroup();
  }

  public initializeTodoFormGroup(): void {
    this.todoCreate = this.formbuilder.group({
      name: ['', [Validators.required, ReactiveFormCustomValidators.checkName(8)]],
      priority: ['', Validators.required],
      displayOrder: '',
      todoDate: new Date(),
      comment: '',
      taskStatus: ['Start'],
      mutlipleTodos: this.mutlipleTodos
    });
  }

  public routeToList(): void {
    this.router.navigateByUrl('/to-do');
  }

  public saveTodo(form: FormGroupDirective): void {
    if (this.todoCreate.invalid) {
      return;
    }

    this.todoService.createTodo(this.todoCreate.value).pipe(
      finalize(() => {
        /* to do */
      })
    )
      .subscribe(
        (({ message }) => {

          this.mutlipleTodos = this.todoCreate.value.mutlipleTodos;
          form.resetForm();
          this.todoCreate.reset();
          this.todoCreate.markAsPristine();
          this.todoCreate.markAsUntouched();
          this.todoCreate.updateValueAndValidity();
          this.openSnackBar(message);

          if (!this.mutlipleTodos) {
            this.router.navigateByUrl('/to-do');
          } else {
            this.initializeTodoFormGroup();
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
