import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions , Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { user } from '../_models/user';


interface User {
    userName: string; 
    password : string;
}


@Injectable()
export class AuthService{

    public serverurl = 'http://localhost:7777/'
    public isloggedin:boolean;
    

    constructor(private http : Http ,private router:Router){

    }

    

    login (userName: string, password:string) {
       let headers = new Headers({'Content-Type': 'application/json'});        
       let options = new RequestOptions({ headers: headers });

       
        return this.http.post(this.serverurl+'api/authenticate',JSON.stringify({userName: userName,password: password}),options )
        .map((response: Response) => {
            let userInfo : user = new user();
            let result = response.json();

            if(result.user){
                userInfo.userName = result.user.userName;
                userInfo.token = result.token;
            }
            
            if(userInfo && userInfo.token){
                sessionStorage.setItem('currentUser', JSON.stringify(userInfo.userName));
                sessionStorage.setItem('token', JSON.stringify(userInfo.token));
            }
            return userInfo;    
        });
    }


    logout(){
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('token')
    }
}