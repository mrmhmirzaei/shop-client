import { Injectable } from '@angular/core';

import { Account } from '../Account/account.service';

@Injectable({
  providedIn: 'root'
})
export class Http {

  public url:String = window.location.hostname == 'localhost'?'http://localhost:3000':'https://api.karneed.ir';
  constructor(private account:Account) {
    this.account.load();
   }

  request(path='/', method='GET', body={}, auth=false){
    return new Promise(async (resolve, reject)=>{
        this.account.load();
        let headers = {};
        let options = {};
        options['method'] = method;
        if(auth == true){
            let token = this.account.token;
            headers['authorization'] = `Bearer ${token['access_token']}`;
        }

        if(method == 'POST' && Object.keys(body).length != 0){
            headers['Content-Type'] = 'application/json';
            options['body'] = JSON.stringify(body);
        }

        options['headers'] = headers;        

        try {
            let response = await fetch(this.url+path, options);
            let res = await response.json();            
            if( 'status' in res && res['status'] == false && res['message'] == "توکن منقضی شده است."){
                this.reToken(path, method, body, auth).then(res=>resolve(res)).catch(error=>reject(error))
            } else {
                resolve(res);
            }
        } catch (error) {            
            reject(error);
        }
    })
  }

  async reToken(path, method, body, auth){
    try {
        let refresh_token = this.account.token['refresh_token'];
        let res = await this.request('/auth/admin/login/auto', "POST", { token: refresh_token }, false);
            if(res['status'] == true){
                await window.localStorage.setItem('name', res['info']['name']);
                await window.localStorage.setItem('access_token', res['auth']['access_token']);
                await window.localStorage.setItem('refresh_token', res['auth']['refresh_token']);
                return this.request(path, method, body, auth)
            } else {
              window.localStorage.clear();
              window.location.reload();
            }
    } catch (error) {
        return error;
    }
  }
}