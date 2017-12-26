import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { WorkorderComponent } from './workorder.component';
 
// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    WorkorderComponent
  ]
})
export class WorkorderModule {}