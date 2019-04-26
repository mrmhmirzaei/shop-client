import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Http } from '../../../services/services.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../auth.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private token: String = null;
  public loading: Boolean = false;

  public password: String = null;
  public confirm_password: String = null;
  constructor(private activedRouter: ActivatedRoute, private snakbar: MatSnackBar, private http: Http, private router: Router) { }

  ngOnInit() {
    this.activedRouter.params.forEach(param=>{
      this.token = param['token'];      
    })    
  }

  async submit(){
    if (this.password == null || this.password.length == 0) {
      this.snakbar.open("رمز عبور وارد نشده است.", "باشه", { duration: 3000 });
    } else if (this.password.length < 8) {
      this.snakbar.open("رمز عبور حداقل باید ۸ کارکتر باشد.", "باشه", { duration: 3000 });
    } else if(this.confirm_password == null || this.confirm_password.length == 0){
      this.snakbar.open("تکرار رمز عبور وارد نشده است.", "باشه", { duration: 3000 });
    } else if(this.confirm_password != this.password){
      this.snakbar.open("رمز عبور با تکرار آن همخوانی ندارد.", "باشه", { duration: 3000 });
    } else {
      try {
        this.loading = true;
        let res = await this.http.request('/auth/user/forget/change', "POST", { token: this.token, password: this.password });
        this.loading = false;
        this.snakbar.open(res['message'], 'باشه', { duration: 3000 });
        if (res['status'] == true) {
          this.router.navigate(['/account/login']);
        }
      } catch (error) {
        this.loading = false;
        this.snakbar.open("خطایی رخ داده است.", null, { duration: 3000 });
      }
    }
  }
}
