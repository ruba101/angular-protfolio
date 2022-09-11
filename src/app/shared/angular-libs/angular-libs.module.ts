import { NgModule } from '@angular/core';

//import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSidenavModule} from '@angular/material/sidenav';


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
    MatSidenavModule
  ],
  exports:[
    //BrowserModule,
    //CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule
  ]
})
export class AngularLibsModule { }
