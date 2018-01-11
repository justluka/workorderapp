import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from '../status-card/status-card.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// containers
import { HomeComponent } from './home.component';
 
// routes
export const ROUTES: Routes = [
  { path: '', component: HomeComponent }
];
 
@NgModule({
  imports: [
    CommonModule,ChartsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    HomeComponent,StatusCardComponent
  ]
})
export class HomeModule {}