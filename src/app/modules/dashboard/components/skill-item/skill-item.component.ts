import { Component, OnInit, Input } from '@angular/core';
import { ISkillItem, SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() item: ISkillItem = {title:'', value: 0, icon: ''};

  currentValue:number = 100;
  increment:number = 5;
  delay:number = 50;
  self:any = this;

  constructor() { }

  ngOnInit(): void {
    this.currentValue = 0;
    this.increaseValue();
  }

  increaseValue(){
    this.currentValue += this.increment;
    this.currentValue = Math.min(this.item.value, this.currentValue);
    if(this.currentValue < this.item.value){
      setTimeout(() => {this.increaseValue();}, this.delay);
    }
  }

}
