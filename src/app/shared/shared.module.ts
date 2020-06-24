import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';
import { HeadingComponent } from './heading/heading.component';



@NgModule({
  declarations: [
    TopicsComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopicsComponent,
    HeadingComponent
  ]
})
export class SharedModule { }
