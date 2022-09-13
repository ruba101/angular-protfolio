import { Component, OnInit, Input } from '@angular/core';
import { IExperienceItem } from '../experience/experience.component';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() item:IExperienceItem = {date:'', title:'', institution:'', description:''};

  constructor() { }

  ngOnInit(): void {
  }

}
