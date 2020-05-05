import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';



@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopicsComponent
  ]
})
export class SharedModule { }
