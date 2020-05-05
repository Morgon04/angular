
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layout Service Import
import { ShellService } from '../shell/shell.service';

// Components Import
import { LandingPageComponent } from './landing-page.component';
import { TopicsComponent } from './topics/topics.component';
import { JsBasicsComponent } from './js-basics/js-basics.component';

const javascriptRoutes: Routes = [
  ShellService.child(
    [
      {
        path: '',
        component: LandingPageComponent,
        data: { title: 'Javascript' },
        children: [
          { path: '', redirectTo: 'topics', pathMatch: 'full' },
          { path: 'topics', component: TopicsComponent, data: { title: 'Javascript Topics' }, },
          { path: 'basics', component: JsBasicsComponent, data: { title: 'Javascript Basics' }, }
        ]
      }
    ]
  )
];

@NgModule({
  imports: [RouterModule.forChild(javascriptRoutes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
