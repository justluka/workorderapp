import { CategoriesService } from './../../_services/categories.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';



@Component({
  moduleId : module.id,
  templateUrl: './workorder-form.component.html',
  styleUrls: ['./workorder-form.component.css']
})
export class WorkorderFormComponent implements OnInit {
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  private selectUndefinedOptionValue:any;
  filesToUpload: Array<File>;
  
  lstCategories$;
  workorder ={};
   datePipe = new DatePipe("en-US");
  constructor(private CategoriesService: CategoriesService) {

    
   }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme});
    this.getCategories();
  }

  getCategories(){
    this.CategoriesService.getAllCategories().subscribe(data=>{
      this.lstCategories$ =data.response[0];      
     });
     
  }

  save(workorder) { 
    workorder=this.formatDates(workorder);
    console.log(workorder);

  }

  formatDates(workorder){
    workorder.startedDate =this.datePipe.transform(workorder.startedDate,'yyyy-MM-dd');
    workorder.signedDate =this.datePipe.transform(workorder.signedDate,'yyyy-MM-dd');
    workorder.completedDate =this.datePipe.transform(workorder.completedDate,'yyyy-MM-dd');
    workorder.releasedTestDate =this.datePipe.transform(workorder.releasedTestDate,'yyyy-MM-dd');
    workorder.releasedProductionDate =this.datePipe.transform(workorder.releasedProductionDate,'yyyy-MM-dd');

    return workorder;
  }
  
  
}
