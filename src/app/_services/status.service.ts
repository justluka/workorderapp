import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions , Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class StatusService{

    public serverurl = 'http://localhost:7777/'
    

    constructor(private http : Http ,private router:Router){

    }

    

    getAllStatus () {
       let headers = new Headers({'Content-Type': 'application/json'});        
       let options = new RequestOptions({ headers: headers });
           options.headers.append('x-access-token',sessionStorage.getItem('token'));
  
        return this.http.get(this.serverurl+'api/status',options )
        .map((response: Response) => 
            response.json()     
        );
    }


}