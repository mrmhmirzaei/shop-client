import { NgModule } from '@angular/core';

import {
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatDialogModule,
    MatBottomSheetModule
} from '@angular/material';


const module = [
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatDialogModule,
    MatBottomSheetModule
];

@NgModule({
    imports: module,
    exports: module
})
export class MaterialModule { }
