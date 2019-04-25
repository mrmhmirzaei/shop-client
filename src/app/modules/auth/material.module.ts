import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule
} from '@angular/material';


const module = [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule
];

@NgModule({
  imports: module,
  exports: module
})
export class MaterialModule { }
