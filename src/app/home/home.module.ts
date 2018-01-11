import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from '../status-card/status-card.component';

// containers
import { HomeComponent } from './home.component';
 
// routes
export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent,StatusCardComponent
  ]
})
export class HomeModule {}