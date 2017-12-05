import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { Routes , RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

// Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth-guard.service';

const appRoutes: Routes = [
  { path: 'login',   component: LoginComponent },
  { path: 'home',     component: HomeComponent},
  { path: '', redirectTo:'/login' , pathMatch:'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    HttpModule,    
    CustomFormsModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  ],
  providers: [AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
