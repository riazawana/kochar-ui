import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {Router} from '@angular/router';


export interface UserData {
  sr_no: string;
  name: string;
  action:any;
}



@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})


export class ZoneComponent implements AfterViewInit {
  displayedColumns: string[] = ['sr_no', 'name', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
 id: string;
  constructor(
    private backend: BackendconnectionService,
    private router: Router
  ) {
  }

  edit:boolean = false;
  delete:boolean = false;
  view:boolean = false;
  add:boolean = false;


  ngAfterViewInit() {
   
  

  
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
          if(features[i].feature_name == 'Zones'){
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


    this.backend.getallzones()
    .subscribe((data)=> { 
      //  console.log("All zones:",data);
       this.dataSource = new MatTableDataSource(data["data"]);

       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

    });

   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addzone(){
    this.router.navigate(['/kochar/addzone']);
  }

 

 

  zoneView(id){
    //alert(id)
    this.router.navigate(['/kochar/viewzone',id])
  }
  zoneEdit(id){
   // alert(id)
   this.router.navigate(['/kochar/editzone',id])
    
  }
 

  zoneDelete(x){

    // alert(x)
    this.backend.deletezone(x)
    .subscribe((data)=> { 

      //  console.log(data);
    });
  }

  addlocation(x){
    // alert(x)
   
      this.router.navigate(['/kochar/addnewlocation',x]);
    
  }
}

