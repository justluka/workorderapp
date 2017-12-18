import { Component, OnInit } from '@angular/core';
import { user } from '../../_models/user';


@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  
  construtor() { }
  userName : string = sessionStorage.getItem('currentUser');

  ngOnInit() {
    let userName : string;

  }

}
