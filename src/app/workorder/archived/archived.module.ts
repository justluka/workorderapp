import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
// containers
import { ArchivedComponent } from './archived.component';

import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedPipeModule } from '../../_pipes/sharedPipe.module';

// routes
export const ROUTES: Routes = [
  { path: '', component: ArchivedComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    NgxPaginationModule,FormsModule,SharedPipeModule
    ],
  declarations: [
    ArchivedComponent
    
  ]
})
export class ArchivedModule {}