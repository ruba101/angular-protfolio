import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IProjectGridItem } from '../../pages/projects/projects.component';

@Component({
  selector: 'app-project-grid-item',
  templateUrl: './project-grid-item.component.html',
  styleUrls: ['./project-grid-item.component.scss']
})
export class ProjectGridItemComponent implements OnInit {

  @Input() item:IProjectGridItem = {title:'hi',thumbnail:''};

  constructor() { }

  ngOnInit(): void {
  }

}
