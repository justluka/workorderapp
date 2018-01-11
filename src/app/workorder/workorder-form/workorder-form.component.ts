import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from './../../_services/categories.service';
import { StatusService } from './../../_services/status.service';
import { UsersService } from './../../_services/users.service';
import { user } from '../../_models/user';
import { awsService } from './../../_services/aws.service';
import { WorkOrderService } from './../../_services/workorder.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId : module.id,
  templateUrl: './workorder-form.component.html',
  styleUrls: ['./workorder-form.component.css']
})
export class WorkorderFormComponent implements OnInit {
  //model
  workorder = {};

  datePipe = new DatePipe("en-US");
  //upload variables
  filesToUpload: Array<File>;
  signedUrl: any;
  fileUrl: string;
  fileName:string;
  oldName: string;


  
  //Global Variables
  title: string='Creating a new Work Order';
  workOrderID;

  //config variables
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  selectUndefinedOptionValue:any;
  selectedRow : number;
  setClickedRow : Function;
  content: string;

  userList=[];
  userListUpdated=[];


  //list from the DB
  lstCategories$;
  lstStatus$;
  lstUsers$;
 
  constructor(private CategoriesService: CategoriesService, 
              private StatusService: StatusService,
              private WorkOrderService: WorkOrderService,
              private awsService: awsService,
              private UsersService: UsersService,
              private router:Router, 
              private route: ActivatedRoute
            ) {

      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme});
      this.getCategories();
      this.getStatus();
      this.getUsers();
    
      //If WorkOrderID exist , that means we are going to update
      this.workOrderID = this.route.snapshot.paramMap.get('id');
      if(this.workOrderID){
         this.WorkOrderService.getWorkOrderByID(this.workOrderID)
          .subscribe(w => {
            this.workorder = w.response[0];
            this.oldName=w.response[0].Document;
            this.fileName=this.oldName;
         });  
         
         this.getResources();
         this.title='Update Work Order';

      }
   
   }

  ngOnInit() {
  }
/************** Getting data from DB  **************/
  getCategories(){
    this.CategoriesService.getAllCategories().subscribe(data=>{    
      this.lstCategories$ = data.response[0];         
     });
     
  }

  getStatus(){
    this.StatusService.getAllStatus().subscribe(data=>{
      this.lstStatus$ = data.response[0];            
     });
     
  }

  getUsers(){
    this.UsersService.getAllUsers().subscribe(data=>{
      this.lstUsers$ =data.response[0];   
     });
     
  }

  getResources(){
    this.WorkOrderService.getResourcesByWorkOrder(this.workOrderID).subscribe(data=>{
      this.userList =data.response; 
      this.userListUpdated= data.response[0];  
           
     });
     
  }

  getFileUrl(){
    this.awsService.getFileSignedUrl(this.content).subscribe(info=>{
      //this.url= info; 
    });
  }
/************** End Getting data from DB  **************/


/************** Page Functions  **************/

  addUserToList(currentUser){
    let index = this.lstUsers$.findIndex(x => x.UserName === currentUser.UserName); //find index in your array
    this.selectedRow = index;


    const findUser = this.userList.find(x => x.UserName === currentUser.UserName);
    if(!findUser) {
      this.userList.push({UserName: currentUser.UserName, Name: currentUser.Name});
      this.userList=this.userList.sort(function(a, b){
        var nameA=a.UserName.toLowerCase(), nameB=b.UserName.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
      });

    }
    
  }

  removeUserFromList(currentUser){
    let index = this.userList.findIndex(x => x.UserName === currentUser.UserName); //find index in your array
    this.userList.splice(index, 1);//remove element from array
    this.userList=this.userList.sort();
  }

  formatDates(workorder){
    workorder.startedDate =this.datePipe.transform(workorder.startedDate,'yyyy-MM-dd');
    workorder.signedDate =this.datePipe.transform(workorder.signedDate,'yyyy-MM-dd');
    workorder.completedDate =this.datePipe.transform(workorder.completedDate,'yyyy-MM-dd');
    workorder.releasedTestDate =this.datePipe.transform(workorder.releasedTestDate,'yyyy-MM-dd');
    workorder.releasedProductionDate =this.datePipe.transform(workorder.releasedProductionDate,'yyyy-MM-dd');
    workorder.document=this.fileName;
    workorder.notes="No notes";
    workorder.lastUpdateByUser=sessionStorage.getItem('currentUser');

   
    return workorder;
  }
  
  onFileChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      this.filesToUpload = event.target.files[0];
      this.fileName =event.target.files[0].name;
      if(this.filesToUpload){
        this.awsService.getSignedUrl(this.filesToUpload).subscribe(info=>{
          this.signedUrl= info.signedRequest; 
        });
      }
    }
  
  }
/************** End Page Functions  **************/


/************** Saving Data DB **************/

  save(workorder, event: Event) { 

    event.preventDefault();
    workorder=this.formatDates(workorder);    
    workorder.document= this.oldName;

    if(this.signedUrl){
      //Upload the file delete oldFile and upload the newonefirst
      this.deleteAWSFile(this.oldName);
      workorder.document= this.fileName;

      this.uploadFileAWS();
      //Get the presignedURL and save work order
      this.awsService.getFileSignedUrl(this.fileName).subscribe(info=>{
        workorder.signedUrl= info; 
        this.saveWorkOrder(workorder);

      });

    }
    else{
      //Just save the workorder without document
      this.saveWorkOrder(workorder);
    } 
  }

  uploadFileAWS(){
    this.awsService.uploadFile(this.filesToUpload, this.signedUrl)
      .subscribe(success=>{
      });
  }


  saveWorkOrder(workorder){
    
    if(!this.workOrderID){ // Create if workOrderID is null
      this.WorkOrderService.saveWorkOrder(workorder)
      .subscribe(success=>{
  
          if(success.status===200 && this.userList.length>0){
            //Work order saved ?  Save Resources
            this.addResourcesToWorkOrder(success.response[0].WorkOrderID);

          } else{
            //Error found, delete File From AWS
            this.deleteAWSFile(this.fileName);
          } 

          // return to workOrders
          this.router.navigate(['/workorder'],{ queryParams: { page: 'workorder' } });

      });    

    }
    else{ //update
      this.WorkOrderService.updateWorkOrder(workorder)
      .subscribe(success=>{
          if(success.status===200 && this.userList.length>0){
            //Work order saved ?  Save Resources, but first delete the old ones
            this.WorkOrderService.deleteResources(this.workOrderID).subscribe(info=> console.log(info)); 
            this.addResourcesToWorkOrder(this.workOrderID);
            // return to workOrders
            this.router.navigate(['/workorder'],{ queryParams: { page: 'workorder' } });

          } else{
            //Error found, delete File From AWS
            this.deleteAWSFile(this.fileName);
          } 

            // return to workOrders
            this.router.navigate(['/workorder'],{ queryParams: { page: 'workorder' } });

      });  
    }
  
       
     
  }

  addResourcesToWorkOrder(WorkOrderID){
    for (let user of this.userList){
      this.WorkOrderService.addResources(WorkOrderID,user.UserName)
      .subscribe(success=>{

      })    
    }

  }

  deleteAWSFile(fileName){
    this.awsService.deleteFileAWS(fileName).subscribe(info=>{     
      console.log(info);   
    });
  }
/************** End Saving Data DB **************/



} // End Class

