import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { WorkorderComponent } from './workorder.component';

import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedPipeModule } from '../_pipes/sharedPipe.module';

// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    NgxPaginationModule,FormsModule,SharedPipeModule
    ],
  declarations: [
    WorkorderComponent
    
  ]
})
export class WorkorderModule {}