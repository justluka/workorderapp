import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/auth-guard.service';

 

const appRoutes: Routes = [
      

    //Secure routes 
    {
        path: '',
        component: AppLayoutComponent,
        canActivate:[AuthGuard],
        children: [
          { path: 'home', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'},
                    
        ]
    },
   
     // Login and other pages without layout
     { path: 'login', component: LoginComponent,  pathMatch: 'full'},    

     //otherwise
     { path: '**', redirectTo: 'home' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
