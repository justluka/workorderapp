import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from './../../_services/workorder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId : module.id,
  templateUrl: './workorder-detail.component.html',
  styleUrls: ['./workorder-detail.component.css']
})
export class WorkorderDetailComponent implements OnInit {
  workOrderID='';
  workOrder$;

  constructor( private WorkOrderService: WorkOrderService, 
               private router:Router, 
               private route: ActivatedRoute) {

    

   }

  ngOnInit() {

    this.workOrderID = this.route.snapshot.paramMap.get('id');
    
      this.WorkOrderService.getWorkOrderByID(this.workOrderID)
          .subscribe(w => {
            this.workOrder$ = w.response;    
            console.log(this.workOrder$)        ;
         });             
  }

}
