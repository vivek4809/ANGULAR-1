import { StoriesComponent } from './dashboard/stories/stories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', component: StoriesComponent },
    { path: 'stories', component: StoriesComponent },
    //{ path: '', redirectTo: 'stories', pathMatch: 'full' }
  ]},
  // {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
