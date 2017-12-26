import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { user } from '../../_models/user';



@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  userInfo : user = new user();
  page: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(route:ActivatedRoute) {
    route.queryParamMap.subscribe(params=>{
      this.page = params.get('page');      
    })

   }

  ngOnInit() {
    this.userInfo.userName = sessionStorage.getItem('currentUser');
    this.userInfo.role=sessionStorage.getItem('RoleID');
    this.userInfo.isAdmin= (sessionStorage.getItem('RoleID')=='1')?true:false;
    this.page =  "home";
  }

  changePageName(pageName){
    this.messageEvent.emit(pageName);
  }

}
