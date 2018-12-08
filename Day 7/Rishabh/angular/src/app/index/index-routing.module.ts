import { DashboardComponent } from './../home/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { SigninComponent } from './components/signin.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    { path: 'signin', component: SigninComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: TestComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
  ]},
  // {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
