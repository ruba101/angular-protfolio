import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    data: { animation: 'one'}
  },
  {
    path:'home',
    component:HomeComponent,
    data: { animation: 'one'}
  },
  {
    path:'about',
    component:AboutComponent,
    data: { animation: 'one'}
  },
  {
    path:'projects',
    component:ProjectsComponent,
    data: { animation: 'one'}
  },
  {
    path:'contact',
    component:ContactComponent,
    data: { animation: 'one'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
