import { Component, Input, OnInit } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';

@Component({
  moduleId : module.id,
  templateUrl: './workorder.component.html'

})
export class WorkorderComponent implements OnInit {
  lstWorkOrder$;
 @Input() data: any ={};

  constructor(private WorkOrderService: WorkOrderService) {

   
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
     this.WorkOrderService.getAllWorkOrders().subscribe(data=>{
      this.lstWorkOrder$ =data.response;
      console.log(this.data.response);
     });

  }
}
