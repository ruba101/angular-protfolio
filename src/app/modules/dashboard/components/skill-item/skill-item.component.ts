import { Component, OnInit, Input } from '@angular/core';
import { ISkillItem } from '../skills/skills.component';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() item: ISkillItem = {title:'', value: 0, icon: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
