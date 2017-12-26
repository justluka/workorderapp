import { WorkOrder } from './../_models/workOrder';
import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions , Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class WorkOrderService{

    public serverurl = 'http://localhost:7777/'
    

    constructor(private http : Http ,private router:Router){

    }

    

    getAllWorkOrders () {
       let headers = new Headers({'Content-Type': 'application/json'});        
       let options = new RequestOptions({ headers: headers });
           options.headers.append('x-access-token',sessionStorage.getItem('token'));
       
        return this.http.get(this.serverurl+'api/workorders',options )
        .map((response: Response) => {
            response.json()               
        });
    }


}