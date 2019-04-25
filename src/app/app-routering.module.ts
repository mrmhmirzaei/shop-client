import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 routing
*/
const routes: Routes = [
  { path : 'account', loadChildren  : './modules/auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
