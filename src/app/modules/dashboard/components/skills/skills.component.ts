import { Component, OnInit } from '@angular/core';

export interface ISkillItem{
  title: string,
  value: number,
  icon: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  tags:string[] = ["HTML", "CSS", "Javascript", "Bootstrap", "Angular", "Angular Material", "Wordpress", "Codeigniter", "Mysql", "PHP"];
  skills:ISkillItem[] = [
    {
      title: 'HTML',
      value: 95,
      icon: ''
    },
    {
      title: 'CSS',
      value: 85,
      icon: ''
    },
    {
      title: 'Javascript',
      value: 90,
      icon: ''
    },
    {
      title: 'Bootstrap',
      value: 80,
      icon: ''
    },
    {
      title: 'Angular',
      value: 75,
      icon: ''
    },
    {
      title: 'Angular Material',
      value: 70,
      icon: ''
    },
    {
      title: 'Wordpress',
      value: 75,
      icon: ''
    },
    {
      title: 'Codeigniter',
      value: 80,
      icon: ''
    },
    {
      title: 'Mysql',
      value: 80,
      icon: ''
    },
    {
      title: 'PHP',
      value: 70,
      icon: ''
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
