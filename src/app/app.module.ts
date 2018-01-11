import { StatusService } from './_services/status.service';
import { CategoriesService } from './_services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { Routes , RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts/ng2-charts';


// Import Components
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth-guard.service';
import { LoginComponent } from './login/index';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { routing } from './app.routing';
import { BsNavbarComponent } from './_layout/bs-navbar/bs-navbar.component';
import { WorkOrderService } from './_services/workorder.service';
import { awsService } from './_services/aws.service';
import { UsersService } from './_services/users.service';

@NgModule({
 
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,   
    HttpModule,    
    CustomFormsModule, 
    NgxPaginationModule,
    routing,
    ChartsModule,
    NgbModule.forRoot()
    
    
  ],
  declarations: [
    AppComponent,    
    LoginComponent,
    AppLayoutComponent,
    BsNavbarComponent
    
  ],
  providers: [AuthService,
              AuthGuard, WorkOrderService, CategoriesService, StatusService, awsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
