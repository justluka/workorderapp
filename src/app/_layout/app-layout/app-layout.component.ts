import { Component, OnInit } from '@angular/core';
import { user } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  userInfo : user = new user();
  page : string;
  construtor(route:ActivatedRoute) { 

    route.queryParamMap.subscribe(params=>{
      this.page = params.get('page');      
    })

  }
  
  ngOnInit() {
    this.userInfo.userName = sessionStorage.getItem('currentUser');
    this.userInfo.role=sessionStorage.getItem('RoleID');
    this.userInfo.isAdmin= (sessionStorage.getItem('RoleID')=='1')?false:false;

  }

}
