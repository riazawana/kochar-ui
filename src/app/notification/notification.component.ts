import { AfterViewInit,OnInit,Component,Inject ,OnDestroy,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';


export interface health {
  sr_no:string;
  status:boolean;
  locationname:string; 
  notification:string;
  createdAt:number;
  updatedAt:number; 
  tat:number;
  remark:string;
  action:any;
}

export interface risk {
  sr_no: string;
  status: boolean;
  locationname: string; 
  notification:string;
  createdAt:number;
  updatedAt:number; 
  tat:number;
  remark:string;
  action:any;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit , OnDestroy {
  displayedColumns: string[] = ['sr_no', 'status', 'locationname','notification','createdAt','updatedAt','tat','remark', 'action'];
  displayedColumns2: string[] = ['sr_no', 'status', 'locationname','notification','createdAt','updatedAt','tat','remark', 'action'];
  
  dataSource: MatTableDataSource<health>;

  @ViewChild(MatPaginator) paginator2: MatPaginator;
  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource2: MatTableDataSource<risk>;
  add:any = false;
  delete:any = false;
  edit:any = false;
  view:any = false;

  
  constructor(
    private backend: BackendconnectionService,
    private router:Router,   
    
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.dataSource = new MatTableDataSource;

    this.dataSource2 = new MatTableDataSource;
   }
   myVar:any;
   client:any;

  ngOnInit() {
     const that = this;
     that.fetchdata();
   this.myVar = setInterval(function(){ 
            that.fetchdata();
     }, 5000);


     var role = sessionStorage.getItem('role');

     if(role == 'admin'){
       setTimeout(() => {
          this.add = true;
       this.edit = true;
       this.delete = true;
       this.view = true;
       });
     }else{
     
       setTimeout(() => {
         var features = JSON.parse(sessionStorage.getItem('features'));
         for(var i = 0; i < features.length; i++){
           if(features[i].feature_name == 'Notifications'){
              if(features[i].add == true){
             this.add = true;
              }
              if(features[i].view == true){
               this.view = true;
                }
                if(features[i].edit == true){
                 this.edit = true;
                  }if(features[i].delete == true){
                   this.delete = true;
                    }
     
           } 
         }
         
        }, 1);
     }
   

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }


  ngOnDestroy(){
    clearInterval(this.myVar);
  }

  

  health:any;
  risk:any;


  fetchdata(){

    this.backend.getallnotifications()
    .subscribe((data)=> { 
      //  console.log("All Notifications health:",data["data"][0]); 
        for(var k = 0; k < data["data"][0].length;k++){
            if(data["data"][0][k]._id == 'Risk Assessment'){
              this.risk = data["data"][0][k].notification;
        // console.log(this.risk);

            }else{
              this.health = data["data"][0][k].notification;
        // console.log(this.health);

        }


        }


       
       this.dataSource2 = new MatTableDataSource( this.risk );
       this.dataSource = new MatTableDataSource( this.health );

       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

       this.dataSource2.paginator = this.paginator2;
       this.dataSource2.sort = this.sort2;

    });
  }

  getnotificationdetails(x,y){
    // alert(x)
  
    this.router.navigate(['/kochar/notification-details',x,y]);
  }

}
