import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Account {

  public name: Object = { first: null, last: null };
  public phone: String = null;
  public email: String = null;
  public token: String = null;
  public loggined: Boolean = (this.token == null) ? false : true;
  private password: String = 'PASSWORD';
  constructor(private router: Router) { }

  async load() {
    try {
      let account = await window.localStorage.getItem('account');
      if (account == null) {
        this.email = null;
        this.token = null;
        this.loggined = false;
      } else if (this.loggined == true) return;
      else {
        let data: any = await CryptoJS.AES.decrypt(account, this.password.trim()).toString(CryptoJS.enc.Utf8);
        data = await JSON.parse(data);        
        this.name = data['name'] || { first: null, last: null };
        this.phone = data['phone'];
        this.email = data['email'];
        this.token = data['auth'];
        this.loggined = true;
      }
    } catch (error) {
      this.forget(false);
    }
  }

  set(email, auth) {
    this.email = email;
    this.token = auth;

    let data: any = {
      email,
      auth
    };
    data = JSON.stringify(data);

    data = CryptoJS.AES.encrypt(data.trim(), this.password.trim()).toString();
    window.localStorage.setItem('account', data);

    this.loggined = true;
    return;
  }

  update() {
    let data: any = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      auth: this.token
    };
    data = JSON.stringify(data);

    data = CryptoJS.AES.encrypt(data.trim(), this.password.trim()).toString();
    window.localStorage.setItem('account', data);
    
    return;
  }

  forget(redirect = true) {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.load();
    if (redirect == true) {
      this.router.navigate(['/']);
    }
  }
}
