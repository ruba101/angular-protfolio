import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface IMenuItem{
  link: string,
  icon: string,
  text: string
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems: IMenuItem[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.menuItems.push({link:'/dashboard/home', icon:'home',text:'Home'});
    this.menuItems.push({link:'/dashboard/about', icon:'info',text:'About'});
    this.menuItems.push({link:'/dashboard/projects', icon:'workspaces',text:'Projects'});
    this.menuItems.push({link:'/dashboard/contact', icon:'contact_page',text:'Contact'});
  }

  navigate(item:IMenuItem):void {
    console.log(item);
    this.router.navigateByUrl(item.link);
  }

}
