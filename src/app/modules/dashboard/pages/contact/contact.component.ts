import { Component, OnInit } from '@angular/core';

export interface IContactOption{
  icon:string,
  text:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactOptions:IContactOption[] = [
    {
      icon:'phone',
      text:'+49 176 48724943'
    },
    {
      icon:'email',
      text:'dilrubaahmed101@gmail.com'
    },
    {
      icon:'public',
      text:'ruba.epizy.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
