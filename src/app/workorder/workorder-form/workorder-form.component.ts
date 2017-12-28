import { CategoriesService } from './../../_services/categories.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



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
    console.log(workorder);
  }

  
}
