import { Component, OnInit,Input } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';

@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  lstWorkOrderStatus$=[];
  total:number=0;
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie'

  @Input('CategoryID') CategoryID:number;

  constructor(private WorkOrderService: WorkOrderService) { 
  
  }

  ngOnInit() {
    this.WorkOrderService.getWorkOrdersByCategory(this.CategoryID).subscribe(data=>{
      this.lstWorkOrderStatus$= data.response;

      for(let item of this.lstWorkOrderStatus$){
        console.log(item);
        this.total = this.total + item.Total;
     }  

     });
   
     
  
  }


  // chart events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
