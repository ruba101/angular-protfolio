import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLibsModule } from '../../shared/angular-libs/angular-libs.module';
import { FlexLayoutModule } from "@angular/flex-layout";


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WelcomeBioComponent } from './components/welcome-bio/welcome-bio.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    WelcomeBioComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
