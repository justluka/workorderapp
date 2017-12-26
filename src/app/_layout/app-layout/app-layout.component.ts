import { Component, OnInit } from '@angular/core';
import { user } from '../../_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../../_services/auth.service'


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  userInfo : user = new user();
  page : string;
  construtor(route:ActivatedRoute, authservice: AuthService,router: Router) { 
    
    route.queryParamMap.subscribe(params=>{
      if(params.get('page'))
        this.page ="home"; 
      this.page = params.get('page');      
    })

  }
  
  ngOnInit() {
    this.userInfo.userName = sessionStorage.getItem('currentUser');
    this.userInfo.role=sessionStorage.getItem('RoleID');
    this.userInfo.isAdmin= (sessionStorage.getItem('RoleID')=='1')?false:false;

  }

  pageName($event){
    this.page=$event;
  }  

  logout(){
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');

  }
}
