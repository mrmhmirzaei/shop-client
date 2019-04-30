import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Http } from '../../../services/services.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public password = { old: "", new: "", renew: "" };
  constructor(private http: Http, private snackbar: MatSnackBar) { }

  ngOnInit() {}

  async update(){
    if(this.password.old.length == 0){
      return this.snackbar.open('رمز عبور قبلی وارد نشده است.', 'باشه', { duration: 3000 });
    } else if(this.password.new.length == 0){
      return this.snackbar.open('رمز عبور جدید وارد نشده است.', 'باشه', { duration: 3000 });
    } else if(this.password.renew.length == 0){
      return this.snackbar.open('تکرار رمز عبور جدید وارد نشده است.', 'باشه', { duration: 3000 });
    } else if(this.password.new.length < 8){
      this.snackbar.open("رمز عبور حداقل باید ۸ کارکتر باشد.", "باشه", { duration: 3000 });
    } else if(this.password.new != this.password.renew){
      this.snackbar.open("رمز عبور با تکرار آن همخوانی ندارد.", "باشه", { duration: 3000 });
    } else {
      try {
        let res = await this.http.request('/api/user/password', 'PUT', { old: this.password.old, new: this.password.new }, true);
        this.snackbar.open(res['message'], 'باشه', { duration: 3000 });
        if(res['status'] == true){
          this.password = { old: "", new: "", renew: "" };
        }
      } catch (error) {
        
      }
    }
  }

}
