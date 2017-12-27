import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// containers
import { CommonModule } from '@angular/common';
import { WorkorderFormComponent } from './workorder-form.component';
import { NgDatepickerModule } from 'ng2-datepicker';



// routes
export const ROUTES: Routes = [
  { path: '', component: WorkorderFormComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    FormsModule,
    NgbModule,
    NgDatepickerModule
    

  ],
  declarations: [    
    WorkorderFormComponent
  ]
})
export class WorkorderFormModule {}