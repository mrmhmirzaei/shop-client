import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule
} from '@angular/material';


const module = [
    MatButtonModule,
    MatIconModule
];

@NgModule({
    imports: module,
    exports: module
})
export class MaterialModule { }
