import { HttpHeaders } from '@angular/common/http';
import {Injectable } from '@angular/core'
import {Http , Headers  } from '@angular/http'
import {Router} from '@angular/router'
import { URLSearchParams } from "@angular/http"


import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map';

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

    signin(user:User) : Observable<any>{
        //let headers = new Headers();
       // headers.append('Content-Type', 'application/json');
       // let options = new RequestOptions({ headers: headers });

       let data = new URLSearchParams();
       data.append('userName', 'llittles');
       data.append('password', '123');
        return this.http.post(this.serverurl+'api/authenticate',data ).map(data => {
            data= data.json()
            return data
        })
    }

    signup(user:User) : Observable<any>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.serverurl+'auth/signup', user , options).map(data=> data.json())
    }

    signout(){
        localStorage.removeItem('token')
    }
}