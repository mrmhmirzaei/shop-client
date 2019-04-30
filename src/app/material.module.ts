import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDividerModule,
    MatBottomSheetModule
} from '@angular/material';


const module = [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatDividerModule,
];

@NgModule({
    imports: module,
    exports: module
})
export class MaterialModule { }
