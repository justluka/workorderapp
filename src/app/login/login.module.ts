import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
 

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}