import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { WorkorderDetailComponent } from './workorder-detail.component';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';


// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderDetailComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),          
    CommonModule,    
    FormsModule,
    CustomFormsModule ],
  declarations: [
    WorkorderDetailComponent
    
  ]
})
export class WorkorderDetailModule {}