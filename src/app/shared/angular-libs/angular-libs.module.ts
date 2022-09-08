import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    BrowserModule,
    MatToolbarModule
  ]
})
export class AngularLibsModule { }
