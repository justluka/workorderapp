import { Component, Input, OnInit } from '@angular/core';
import { WorkOrderService } from './../../_services/workorder.service';
import { awsService } from './../../_services/aws.service';
import { ActivatedRoute, Router } from '@angular/router';

interface MyWindow extends Window {
  myFunction(): void;
}

@Component({
  moduleId : module.id,
  templateUrl: './archived.component.html'

})




export class ArchivedComponent implements OnInit {
  lstWorkOrder$;
  query='';
  p: number=1;
  total;

  constructor(private WorkOrderService: WorkOrderService,  
              private awsService: awsService,
              private router:Router
            ) {

   
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
     this.WorkOrderService.getAllArchivedWorkOrders().subscribe(data=>{
      this.lstWorkOrder$ =data.response;
      this.getTotal();
     });

  }



  downloadFile(document){
    this.awsService.getFileSignedUrl(document).subscribe(info=>{
      window.open(info);       
    });
  }


  activateWorkOrder(workOrder){
    console.log(workOrder);
    if (!confirm('Are you sure you want to ACTIVATE this Work Order # ' + workOrder.WorkOrderID)) return;

    this.WorkOrderService.activateWorkOrder (workOrder)
      .subscribe(success=>{
        this.lstWorkOrder$ =success.response;
        this.getTotal();
      }) 
  }

  getTotal(){
    this.total =this.lstWorkOrder$.length + ' Records were found.' ;
  }


}
