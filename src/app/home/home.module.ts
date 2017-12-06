import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { HomeComponent } from './home.component';
 
// routes
export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}