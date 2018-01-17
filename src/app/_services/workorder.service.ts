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

    getAllWorkOrdersByStatus () {
      
        return this.http.get(this.serverurl+'api/ByStatus',this.options )
        .map((response: Response) => 
            response.json()     
        );
    }

    getMyWorkOrders () {
        let user: string =sessionStorage.getItem('currentUser');

        return this.http.get(this.serverurl+'api/workorders/myOrders/'+ user,this.options )
        .map((response: Response) => 
            response.json()     
        );
    }

    getAllArchivedWorkOrders () {
      
        return this.http.get(this.serverurl+'api/workorders/getArchived',this.options )
        .map((response: Response) => 
            response.json()     
        );
    }



    getWorkOrderByID (workOrderID) {
         
        return this.http.get(this.serverurl+'api/workorders/' + workOrderID,this.options )
        .map((response:Response)=>{
           return response.json();
        });
        ;
    }

    getWorkOrdersByCategory (CategoryID) {
         
        return this.http.get(this.serverurl+'api/workorders/ByCategory/' + CategoryID,this.options )
        .map((response:Response)=>{
           return response.json();
        });
        ;
    }


    getResourcesByWorkOrder (workOrderID) {
        let headers = new Headers({'Content-Type': 'application/json'});        
        let options = new RequestOptions({ headers: headers });
            options.headers.append('x-access-token',sessionStorage.getItem('token'));
   
        return this.http.get(this.serverurl+'api/workorder/getResources/' + workOrderID,options )
        .map((response:Response)=>{                         
           return response.json();
        });
        ;
    }


    saveWorkOrder (workorder){
         return this.http.post(this.serverurl+'api/workorder/add',workorder,this.options )
         .map((response: Response) => 
         response.json()     
         );
    }

    updateWorkOrderPriority (workorder){
        return this.http.put(this.serverurl+'api/workorder/editPriority',workorder,this.options )
        .map((response: Response) => 
        response.json()     
        );
   }

   updateWorkOrder (workorder){
    return this.http.put(this.serverurl+'api/workorder/edit',workorder,this.options )
    .map((response: Response) => 
    response.json()     
    );
   }

   archiveWorkOrder (workorder){
    return this.http.put(this.serverurl+'api/workorder/archive',workorder,this.options )
    .map((response: Response) => 
    response.json()     
    );
   }


   activateWorkOrder (workorder){
    return this.http.put(this.serverurl+'api/workorder/activate',workorder,this.options )
    .map((response: Response) => 
    response.json()     
    );
   }


    addResources (WorkOrderID, UserName){
        return this.http.post(this.serverurl+'api/workorder/addResources',{WorkOrderID: WorkOrderID, UserName: UserName},this.options )
        .map((response: Response) => 
        response.json()     
        );
   }

    deleteResources (id){
        this.options.search = new URLSearchParams();
        this.options.search.set("id", id);
        return this.http.delete(this.serverurl+'api/workorder/deleteResources/'+id,this.options )
        .map((response: Response) => {
            response.json()     
        }
        );
    }

    deleteWorkOrder (id){
        this.options.search = new URLSearchParams();
        this.options.search.set("id", id);
        return this.http.delete(this.serverurl+'api/workorder/delete/'+id,this.options )
        .map((response: Response) => {
            console.log(response);
            let result = response.status;
            return result;       
        }
        );
    }

    setOptions(){
        this.options="";
        this.options = new RequestOptions({ headers: this.headers });
        this.options.headers.append('x-access-token',sessionStorage.getItem('token'));
    }

}