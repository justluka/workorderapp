import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions , Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService{

    public serverurl = 'http://localhost:7777/'
    headers=new Headers({'Content-Type': 'application/json'});        
    options;

    constructor(private http : Http ,private router:Router){
        
        this.setOptions();
    }

    

    getAllUsers () {
      
        return this.http.get(this.serverurl+'api/users',this.options )
        .map((response: Response) => 
            response.json()     
        );
    }


    setOptions(){
        this.options="";
        this.options = new RequestOptions({ headers: this.headers });
        this.options.headers.append('x-access-token',sessionStorage.getItem('token'));
    }

}