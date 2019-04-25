import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaModule, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { NotAuth } from '../../services/Auth/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [NotAuth] },
  { path: 'login', component: LoginComponent, canActivate: [NotAuth] }
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RecaptchaModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'fa',
    },
  ]
})
export class AuthModule { }
