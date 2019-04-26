import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<navigation-bar *ngIf="show_navigation_bar"></navigation-bar><router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  public show_navigation_bar: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event=>{
      if(window.location.pathname.includes('/account/')){
        this.show_navigation_bar = false;
      } else {
        this.show_navigation_bar = true;
      }
    })
  }
}
