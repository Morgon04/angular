// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Import
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Routing Module Import
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Component Import
import { AccountComponent } from './account/account.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [AccountComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,

    // Material Import
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
