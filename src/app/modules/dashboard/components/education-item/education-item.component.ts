import { Component, OnInit, Input } from '@angular/core';
import { IEducationItem } from '../education/education.component';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {

  @Input() item:IEducationItem = {date:'', title:'', institution:'', description:''};

  constructor() { }

  ngOnInit(): void {
  }

}
