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
 
  constructor(private authservice : AuthService , private router:Router ) { }

  ngOnInit() {
          
  }

  login() {       
        this.authservice.login(this.model.userName, this.model.password)
        .subscribe(userInfo=>{
          
          if(userInfo.token){            
            this.router.navigateByUrl('/home');
            console.log(userInfo);
           }
        })
    }
}
