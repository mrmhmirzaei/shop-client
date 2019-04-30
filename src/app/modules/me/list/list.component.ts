import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../../services/services.service';

@Component({
  selector: 'me-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public path: String = window.location.pathname;
  constructor(public account:Account, private router:Router) { }
  
  ngOnInit(){
    this.router.events.subscribe(event=>{
      this.path = window.location.pathname;
    })
  }
}
