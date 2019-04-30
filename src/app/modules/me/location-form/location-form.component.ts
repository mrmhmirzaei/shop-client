import { Component, Inject } from '@angular/core';
import { Http } from '../../../services/services.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {

  public loading: Boolean = false;
  constructor(private dialogRef: MatDialogRef<LocationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: Http, private snackbar: MatSnackBar) { }


  async add() {
    let name: String = this.data.name,
      address: String = this.data.address,
      code: String = this.data.code,
      phone: String = this.data.phone;

    if (name.length == 0) {
      this.snack("نام آدرس وارد نشده است.");
    } else if (address.length == 0) {
      this.snack("آدرس وارد نشده است.")
    } else if (code.length == 0) {
      this.snack("کد پستی وارد نشده است.")
    } else if (code.length != 10) {
      this.snack("کد پستی باید ده رقمی باشد.")
    } else if (phone.length == 0) {
      this.snack("شماره تلفن وارد نشده است.")
    } else {
      try {
        this.loading = true;
        let res = await this.http.request("/api/location", "POST", { name, address, code, phone }, true);
        this.snack(res['message'])
        this.loading = false;
        if (res['status'] == true) {
          this.dialogRef.close(this.data);
        }
      } catch (error) {
        this.loading = false;
      }
    }
  }

  async update() {
    let name: String = this.data.name,
      address: String = this.data.address,
      code: String = this.data.code,
      phone: String = this.data.phone;

    if (name.length == 0) {
      this.snack("نام آدرس وارد نشده است.");
    } else if (address.length == 0) {
      this.snack("آدرس وارد نشده است.")
    } else if (code.length == 0) {
      this.snack("کد پستی وارد نشده است.")
    } else if (code.length != 10) {
      this.snack("کد پستی باید ده رقمی باشد.")
    } else if (phone.length == 0) {
      this.snack("شماره تلفن وارد نشده است.")
    } else {
      try {
        this.loading = true;
        let res = await this.http.request("/api/location", "PUT", { id: this.data._id, name, address, code, phone }, true);
        this.snack(res['message'])
        this.loading = false;
        if (res['status'] == true) {
          this.dialogRef.close(this.data);
        }
      } catch (error) {
        this.loading = false;
      }
    }
  }

  close() {
    this.dialogRef.close();
  }

  snack(message = "") {
    this.snackbar.open(message, "باشه", { duration: 3000 });
  }
}
