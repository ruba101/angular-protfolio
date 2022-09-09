import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  @ViewChild(MatSidenav)
  sideNav!:MatSidenav;

  @ViewChild('sidenav-btn')
  sidenavBtn!: ElementRef;

  public visibility!:string;


  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.visibility = 'hidden';
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe(res => {
      if(res.matches){
        this.sideNav.mode = 'over';
        this.sideNav.close();
        this.visibility = 'visible';
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
        this.visibility = 'hidden';
      }
    });
  }

}
