import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent
  ]
})
export class AuthModule { }
