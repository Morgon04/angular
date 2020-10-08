import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Import
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { SignInComponent } from './sign-in/sign-in.component';

const authenticationRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          title: 'New User'
        }
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: 'Returning User'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
