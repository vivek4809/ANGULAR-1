import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'index', loadChildren: './index/index.module#IndexModule'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
