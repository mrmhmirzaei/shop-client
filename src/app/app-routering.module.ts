import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 routing
*/
const routes: Routes = [
  { path : '', loadChildren  : './modules/main/main.module#MainModule'},
  { path : 'account', loadChildren  : './modules/auth/auth.module#AuthModule'},
  { path : 'me', loadChildren : './modules/me/me.module#MeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
