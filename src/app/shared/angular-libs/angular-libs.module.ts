import { NgModule } from '@angular/core';

//import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [],
  imports: [
    //BrowserModule,
    //CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  exports:[
    //BrowserModule,
    //CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatProgressBarModule
  ]
})
export class AngularLibsModule { }
