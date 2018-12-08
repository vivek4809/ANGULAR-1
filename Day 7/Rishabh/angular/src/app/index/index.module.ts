import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SigninComponent } from './components/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    IndexComponent,
    SigninComponent,
    ForgotPasswordComponent,
    SignupComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
  ]
})
export class IndexModule { }
