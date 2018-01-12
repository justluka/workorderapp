import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { WorkOrderService } from './../_services/workorder.service';
import { BaseChartDirective, Color } from 'ng2-charts';


@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  lstWorkOrderStatus$=[];
  total:number=0;
  pieChartLabels:Array<any>=[];
  pieChartData:Array<any>=[];
  public colors: Array<Color> = [{ backgroundColor:['yellow', 'green', 'blue', 'red', 'Purple', 'Orange'],  borderColor: '#1D871B'}];
   chartOptions = { responsive: true, tooltips: { mode: 'index', intersect: false } };

  pieChartType:string = 'pie'

  @Input('CategoryID') CategoryID:number;

  constructor(private WorkOrderService: WorkOrderService) { 

  }

  ngOnInit() {
    this.WorkOrderService.getWorkOrdersByCategory(this.CategoryID).subscribe(data=>{
      this.lstWorkOrderStatus$= data.response;
      let labels:Array<string>=[];
      let total=[];

      for(let item of this.lstWorkOrderStatus$){
        this.total = this.total + item.Total;
        labels.push(item.Status);
        total.push(item.Total);
     }  

     this.chart.chart.config.data.labels = labels;
     this.pieChartData=total;


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
