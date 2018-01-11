import { Component, OnInit,Input } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';

@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  lstWorkOrderStatus$;

  @Input('CategoryID') CategoryID:number;

  constructor(private WorkOrderService: WorkOrderService) { 
  
  }

  ngOnInit() {
    this.WorkOrderService.getWorkOrdersByCategory(this.CategoryID).subscribe(data=>{
      this.lstWorkOrderStatus$= data.response;
     });
  }

}
