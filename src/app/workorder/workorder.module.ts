import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { WorkorderComponent } from './workorder.component';

import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../_pipes/search.pipe';

// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    NgxPaginationModule,FormsModule
    ],
  declarations: [
    WorkorderComponent, SearchPipe
    
  ]
})
export class WorkorderModule {}