import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AngularLibsModule } from './shared/angular-libs/angular-libs.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularLibsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
