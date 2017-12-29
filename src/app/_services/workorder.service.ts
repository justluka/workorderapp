import { WorkOrder } from './../_models/workOrder';
import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions , Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { headersToString } from 'selenium-webdriver/http';


@Injectable()
export class WorkOrderService{

    public serverurl = 'http://localhost:7777/'
    headers=new Headers({'Content-Type': 'application/json'});        
    options;

    constructor(private http : Http ,private router:Router){
        this.setOptions();
    }

    

    getAllWorkOrders () {
      
        return this.http.get(this.serverurl+'api/workorders',this.options )
        .map((response: Response) => 
            response.json()     
        );
    }

    saveWorkOrder (workorder){

         return this.http.post(this.serverurl+'api/workorder/add',workorder,this.options )
         .map(success=>success.status);
    }

    setOptions(){
        this.options = new RequestOptions({ headers: this.headers });
        this.options.headers.append('x-access-token',sessionStorage.getItem('token'));
    }

}