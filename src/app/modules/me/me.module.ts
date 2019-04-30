import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';

import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LocationListComponent, LocationRemoveComponent } from './location-list/location-list.component';
import { LocationFormComponent } from './location-form/location-form.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'locations', component: LocationListComponent },
];

@NgModule({
  declarations: [ProfileComponent, ListComponent, ChangePasswordComponent, LocationListComponent, LocationRemoveComponent, LocationFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [LocationRemoveComponent, LocationFormComponent]
})
export class MeModule { }
