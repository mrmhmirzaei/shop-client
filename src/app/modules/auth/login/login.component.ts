import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Http, Account } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css']
})
export class LoginComponent {

  public loading: Boolean = false;

  public email: String = null;
  public password: String = null;
  constructor(private snakbar: MatSnackBar, private http: Http, private account: Account, private router: Router) { }
  async submit() {
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (this.email == null || this.email.length == 0) {
      this.snakbar.open("آدرس ایمیل وارد نشده است.", "باشه", { duration: 3000 });
    } else if (validateEmail(this.email) == false) {
      this.snakbar.open("آدرس ایمیل اشتباه است.", "باشه", { duration: 3000 });
    } else if (this.password == null || this.password.length == 0) {
      this.snakbar.open("رمز عبور وارد نشده است.", "باشه", { duration: 3000 });
    } else if (this.password.length < 8) {
      this.snakbar.open("رمز عبور حداقل باید ۸ کارکتر باشد.", "باشه", { duration: 3000 });
    } else {
      try {
        this.loading = true;
        let res = await this.http.request('/auth/user/login', "POST", { email: this.email, password: this.password });
        this.snakbar.open(res['message'], 'باشه', { duration: 3000 });
        this.loading = false;
        if (res['status'] == true) {
          this.account.set(res['auth']);
          this.router.navigate(['/']);
        }
      } catch (error) {
        this.loading = false;
        this.snakbar.open("خطایی رخ داده است.", null, { duration: 3000 });
      }
    }
  }
}
