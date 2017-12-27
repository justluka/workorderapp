import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { WorkorderComponent } from './workorder.component';
import { CommonModule } from '@angular/common';
 
// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  declarations: [
    WorkorderComponent
  ]
})
export class WorkorderModule {}