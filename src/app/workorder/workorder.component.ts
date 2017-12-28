import { Component, Input, OnInit } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';

@Component({
  moduleId : module.id,
  templateUrl: './workorder.component.html'

})
export class WorkorderComponent implements OnInit {
  lstWorkOrder$;
  p: number=1;
  constructor(private WorkOrderService: WorkOrderService) {

   
   }

  ngOnInit() {
    this.getData();
  }

  getData(){
     this.WorkOrderService.getAllWorkOrders().subscribe(data=>{
      this.lstWorkOrder$ =data.response;
     });

  }
}
