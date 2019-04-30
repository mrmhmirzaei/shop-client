import { Component, OnInit } from '@angular/core';
import { MatDialog, MatBottomSheet, MatBottomSheetRef, MatSnackBar } from '@angular/material';
import { LocationFormComponent } from '../location-form/location-form.component';
import { Http } from '../../../services/services.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  public loading: Boolean = false;
  public locations: Object[] = null;
  constructor(private dialog: MatDialog, private bottomSheet: MatBottomSheet, private snackbar: MatSnackBar, private http: Http) { }

  ngOnInit() {
    this.fetch_all();
  }

  async fetch_all() {
    try {
      this.loading = true;
      let res = await this.http.request("/api/location", "GET", {}, true);
      if (res['status'] == true) {
        if(this.locations != null){
          this.locations = this.locations.concat(res['data']);
        } else {
          this.locations = res['data'];
        }
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }

  openForm(data = {}) {
    this.dialog.open(LocationFormComponent, { data }).afterClosed().subscribe(data => {
      if (data && Object.keys(data).length != 0) {
        if (data._id == null) {
          this.fetch_all();
        }
      }
    })
  }

  remove(_id, index) {
    this.bottomSheet.open(LocationRemoveComponent).afterDismissed().subscribe(async status => {
      if (status == true) {
        try {
          this.loading = true;
          let res = await this.http.request("/api/location", "DELETE", { id: _id }, true);
          if (res['status'] == true) {
            this.locations.splice(index, 1);
          }
          this.snackbar.open(res['message'], "باشه", { duration: 3000 });
          this.loading = false;
        } catch (error) {
          this.loading = false;
        }
      }
    })
  }
}

@Component({
  selector: 'app-location-remove',
  template: `
    <h3>حذف آدرس</h3>
    <p>آیا واقعا میخواهید این آدرس را حذف کنید ؟</p>
    <div style="direction: ltr">
      <button mat-button color="primary" (click)="submit(true)">بله</button>
      <button mat-button (click)="submit(false)">انصراف</button>
    </div>
    `
})
export class LocationRemoveComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<LocationRemoveComponent>) { }

  submit(action){
    this.bottomSheetRef.dismiss(action);
  }
}
