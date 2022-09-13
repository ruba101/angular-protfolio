import { Component, OnInit } from '@angular/core';

export interface IExperienceItem{
  date: string,
  title:string,
  institution:string,
  description:string
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceItems:IExperienceItem[] = [
    {
      date:'01.09.2022 - Present',
      title:'Frontend Developer',
      institution:'Upwork',
      description: 'Major in Finance'
    },
    {
      date:'01.02.2019 - 31.08.2020',
      title:'Frontend Developer',
      institution:'Urbok Studio',
      description: ''
    },
    {
      date:'01.12.2018 - 31.01.2019',
      title:'Trainee',
      institution:'Urbok Studio',
      description: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
