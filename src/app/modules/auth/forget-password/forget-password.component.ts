import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Http } from '../../../services/services.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../auth.component.css']
})
export class ForgetPasswordComponent {

  public loading: Boolean = false;

  public email: String = null;
  public requested: Boolean = false;
  constructor(private snakbar: MatSnackBar, private http: Http) { }
  async submit() {
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (this.email == null || this.email.length == 0) {
      this.snakbar.open("آدرس ایمیل وارد نشده است.", "باشه", { duration: 3000 });
    } else if (validateEmail(this.email) == false) {
      this.snakbar.open("آدرس ایمیل اشتباه است.", "باشه", { duration: 3000 });
    } else {
      try {
        this.loading = true;
        let res = await this.http.request('/auth/user/forget/request', "POST", { email: this.email });
        this.loading = false;
        if (res['status'] == true) {
          this.requested = true;
        } else {
          this.snakbar.open(res['message'], 'باشه', { duration: 3000 });
        }
      } catch (error) {
        this.loading = false;
        this.snakbar.open("خطایی رخ داده است.", null, { duration: 3000 });
      }
    }
  }
}
