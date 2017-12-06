import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {AuthService} from '../service/auth.service'


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isNotLogged = false;
  constructor(private authservice : AuthService , private router:Router ) { }

  ngOnInit() {
     // In case there is no logout
     this.authservice.logout(); 
  }

  login() {    
        this.authservice.login(this.model.userName, this.model.password)
        .subscribe(userInfo=>{
          
          if(userInfo.token){            
            this.router.navigateByUrl('/home');
            this.isNotLogged = false;
            
           }
           else{
             this.isNotLogged = true;
             
           }
        })
    }
}
