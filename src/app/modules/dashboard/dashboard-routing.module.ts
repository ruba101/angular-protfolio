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
    data: { animation: 'home'}
  },
  {
    path:'home',
    component:HomeComponent,
    data: { animation: 'home'}
  },
  {
    path:'about',
    component:AboutComponent,
    data: { animation: 'about'}
  },
  {
    path:'projects',
    component:ProjectsComponent,
    data: { animation: 'projects'}
  },
  {
    path:'contact',
    component:ContactComponent,
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
