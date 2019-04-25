import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Account } from '../Account/account.service';

@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate{

  constructor(private account:Account, private router:Router) { }

  async canActivate(){
    await this.account.load();
    if(this.account.loggined == true){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotAuth implements CanActivate{

  constructor(private account:Account) { }

  async canActivate(){
    await this.account.load();
    if(this.account.loggined == true){
      window.history.back();
      return false;
    } else {
      return true;
    }
  }
}