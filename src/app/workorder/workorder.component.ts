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

  constructor(private WorkOrderService: WorkOrderService,  
              private awsService: awsService,
              private router:Router
            ) {

   
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
     this.WorkOrderService.getAllWorkOrders().subscribe(data=>{
      this.lstWorkOrder$ =data.response;
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

  archiveWorkOrder(workOrder){
    console.log(workOrder);
    if (!confirm('Are you sure you want to ARCHIVE this Work Order # ' + workOrder.WorkOrderID)) return;

    this.WorkOrderService.archiveWorkOrder (workOrder)
      .subscribe(success=>{
        this.lstWorkOrder$ =success.response;
      }) 
  }



}
