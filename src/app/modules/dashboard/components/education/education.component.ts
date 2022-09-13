import { Component, OnInit } from '@angular/core';

export interface IEducationItem{
  date: string,
  title:string,
  institution:string,
  description:string
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationItems:IEducationItem[] = [
    {
      date:'2015 - 2016',
      title:'Masters in Business Administration',
      institution:'South-East University, Bangladesh',
      description: 'Major in Finance'
    },
    {
      date:'2009 - 2013',
      title:'Bachelors in Business Administration',
      institution:'University of Information Technology and Sciences, Bangladesh',
      description: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
