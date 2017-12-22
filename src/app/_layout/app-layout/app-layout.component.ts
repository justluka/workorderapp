import { Component, OnInit } from '@angular/core';
import { user } from '../../_models/user';
import { ActivatedRoute } from '@angular/router/src/router_state';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  userInfo : user = new user();
  construtor() { 
  }
  
  ngOnInit() {
    this.userInfo.userName = sessionStorage.getItem('currentUser');
    this.userInfo.role=sessionStorage.getItem('RoleID');
    this.userInfo.isAdmin= (sessionStorage.getItem('RoleID')=='1')?false:false;

  }

}
