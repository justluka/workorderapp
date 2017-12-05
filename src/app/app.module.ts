import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AuthService } from './service/auth.service';
import { Routes , RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'signin',   component: LoginComponent },
  { path: 'home',     component: HomeComponent},
  { path: '', redirectTo:'/signin' , pathMatch:'full' },
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
