import { Component, OnInit } from '@angular/core';

export interface IProjectGridItem{
  title:string,
  thumbnail:string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects:IProjectGridItem[] = [];

  constructor() {

    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});
    this.projects.push({title:'test', thumbnail:'test'});

  }

  ngOnInit(): void {
  }

}
