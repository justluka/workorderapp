import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// containers
import { CommonModule } from '@angular/common';
import { WorkorderFormComponent } from './workorder-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap';




// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderFormComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule,BsDatepickerModule.forRoot(),
    NgbModule
    
    

  ],
  declarations: [    
    WorkorderFormComponent
  ]
})
export class WorkorderFormModule {}