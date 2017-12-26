import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  moduleId : module.id,
  templateUrl: './workorder.component.html'

})
export class WorkorderComponent implements OnInit {
  lstWorkOrder$;

  constructor(private WorkOrderService: WorkOrderService) {
    this.WorkOrderService.getAllWorkOrders().subscribe((res)=>{
      this.lstWorkOrder$= res;
    })

   }

  ngOnInit() {
  }

}
