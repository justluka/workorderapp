import { Component, Input, OnInit } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';
import { awsService } from './../_services/aws.service';
import { ActivatedRoute, Router } from '@angular/router';

interface MyWindow extends Window {
  myFunction(): void;
}

@Component({
  moduleId : module.id,
  templateUrl: './workorder.component.html'

})




export class WorkorderComponent implements OnInit {
  lstWorkOrder$;
  query='';
  p: number=1;
  total;
  filter:string;
  readonly="false";

  constructor(private WorkOrderService: WorkOrderService,  
              private awsService: awsService,
              private router:Router,
              private route:ActivatedRoute
            ) {

              route.queryParamMap.subscribe(params=>{
                this.filter = params.get('filter');      
              })
                
   
   }

  ngOnInit() {
  
    this.getData();  
  }

  getData(){

    if(this.filter==="myorders"){
      this.getMyWorkOrders();
     // this.readonly="true";

    }
    else{
      //this.readonly="false";
      this.getAllWorkOrders();
    }
  }

  getAllWorkOrders(){
     this.WorkOrderService.getAllWorkOrders().subscribe(data=>{
      this.lstWorkOrder$ =data.response;
      this.getTotal();
     });

  }

  getMyWorkOrders(){
    this.WorkOrderService.getMyWorkOrders().subscribe(data=>{
     this.lstWorkOrder$ =data.response;
     this.getTotal();
    });

 }

  deleteWorkOrder(id,index, document){
    console.log(id);
    if (!confirm('Are you sure you want to delete this Work Order # ' + id)) return;
    this.WorkOrderService.deleteWorkOrder(id).subscribe(status=>
    {
      console.log(status);
      if (status===200 && document){
        this.deleteAWSFile(document);
      }
      else
        console.log(status);
    })
    this.getData();
  }

 

  deleteAWSFile(fileName){
    this.awsService.deleteFileAWS(fileName).subscribe(info=>{     
      //this.lstWorkOrder$ =info.response;
    });
  }  

  downloadFile(document){
    this.awsService.getFileSignedUrl(document).subscribe(info=>{
      window.open(info);       
    });
  }

  changePriority(priority, workOrder){
    workOrder.Priority = priority;
    //alert (wOrkorder.Priority);
    this.WorkOrderService.updateWorkOrderPriority (workOrder)
    .subscribe(success=>{
      this.getData();
    }) 

  }

  archiveWorkOrder(workOrder){
    console.log(workOrder);
    if (!confirm('Are you sure you want to ARCHIVE this Work Order # ' + workOrder.WorkOrderID)) return;

    this.WorkOrderService.archiveWorkOrder (workOrder)
      .subscribe(success=>{
        this.getData();
        this.getTotal();

      }) 
  }

 getTotal(){
    this.total =this.lstWorkOrder$.length + ' Records were found.' ;
  }

}
