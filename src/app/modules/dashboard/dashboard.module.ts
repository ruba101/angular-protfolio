import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLibsModule } from '../../shared/angular-libs/angular-libs.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WelcomeBioComponent } from './components/welcome-bio/welcome-bio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ProjectGridItemComponent } from './components/project-grid-item/project-grid-item.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    WelcomeBioComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillItemComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    ProjectGridItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule { }
