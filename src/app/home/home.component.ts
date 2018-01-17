import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../_services/categories.service';

@Component({
  moduleId : module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //list from the DB
  lstCategories$;
  constructor(private CategoriesService: CategoriesService) {
      this.getCategories();

   }

  ngOnInit() {
  }

  /************** Getting data from DB  **************/
  getCategories(){
    this.CategoriesService.getAllCategoriesWithWO().subscribe(data=>{    
      this.lstCategories$ = data.response[0];         
     });
     
  }
  /**************End Getting data from DB  **************/

}
