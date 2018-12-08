import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';

const routes: Routes = [
  {path: '', component: ProfileLayoutComponent, children: [
    {path: '', component: ProfilePageComponent},
    {path: 'about', component: ProfileAboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
