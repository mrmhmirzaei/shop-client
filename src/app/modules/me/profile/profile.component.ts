import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Account, Http } from '../../../services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Object = {
    phone: {
      verified: false
    }
  };
  constructor(public account:Account, private http:Http, private snakbar: MatSnackBar) { }

  public loading: Boolean = false;
  ngOnInit() {
    this.getInfo();
  }

  async getInfo(){
    try {
      this.loading = true;
      let res = await this.http.request('/api/user/profile', 'GET', {}, true);
      this.loading = false;      
      if(res['status'] == true){
        this.account.name = res['data']['name'];
        this.account.phone = res['data']['phone']['number'];
        this.profile = res['data'];
        this.account.update();
      }
    } catch (error) {
      this.loading = false;
    }
  }

  async update(){
    try {
      this.loading = true;
      let res = await this.http.request('/api/user/profile', 'PUT', { name: this.account.name, 'phone.number': this.account.phone }, true);
      this.loading = false;
      this.snakbar.open(res['message'], 'باشه', { duration: 3000 });
      if(res['status'] == true) this.account.update();
    } catch (error) {
      this.loading = false;
    }
  }
}
