import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { Routes , RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

// Import Components
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth-guard.service';
import { LoginComponent } from './login/index';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { routing } from './app.routing';
import { BsNavbarComponent } from './_layout/bs-navbar/bs-navbar.component';

@NgModule({
 
  imports: [
    BrowserModule,
    FormsModule,   
    HttpModule,    
    CustomFormsModule, 
    routing,
    NgbModule.forRoot()
    
    
  ],
  declarations: [
    AppComponent,    
    LoginComponent,
    AppLayoutComponent,
    BsNavbarComponent
    
  ],
  providers: [AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
