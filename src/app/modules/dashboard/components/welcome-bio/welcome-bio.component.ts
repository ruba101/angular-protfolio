import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-bio',
  templateUrl: './welcome-bio.component.html',
  styleUrls: ['./welcome-bio.component.scss']
})
export class WelcomeBioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToAboutPage(){
    this.router.navigateByUrl('/dashboard/about');
  }

}
