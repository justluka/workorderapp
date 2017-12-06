import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthService} from '../_services/auth.service'



@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isNotLogged = false;
  returnUrl: string;

  constructor(private authservice : AuthService , 
              private router:Router, 
              private route: ActivatedRoute  ) { }

  ngOnInit() {
     // In case there is no logout
     this.authservice.logout(); 
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home'
  }

  login() {    
        this.authservice.login(this.model.userName, this.model.password)
        .subscribe(userInfo=>{
          
          if(userInfo.token){  
            console.log(this.returnUrl);          
            this.router.navigate([this.returnUrl]);
            this.isNotLogged = false;
            
           }
           else{
             this.isNotLogged = true;
             
           }
        })
    }
}
