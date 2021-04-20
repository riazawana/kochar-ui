
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export interface UserData {
  sr_no: string;
  name: string;
  action:any;
}



@Component({
  selector: 'app-zone-device',
  templateUrl: './zone-device.component.html',
  styleUrls: ['./zone-device.component.css']
})

export class ZoneDeviceComponent implements AfterViewInit {
  displayedColumns: string[] = ['sr_no', 'name', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  add = false;
  view = false;
  edit = false;
  delete = false;



  constructor(
    private backend: BackendconnectionService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngAfterViewInit() {


    this.add = false;
    this.view = false;
    this.edit = false;
    this.delete = false;



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
          if(features[i].feature_name == 'Devices'){
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
      // console.log("All zones:",data);
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

  viewlocation(x){

    var url = this.router.url.split("/");
   // console.log(url);
   

    // if(url[2] == "Devices"){
      this.router.navigate(['/kochar/Locations',x,'Devices']);
    // }else{
    // this.router.navigate(['/kochar/Locations',x,'in']);
    // }
  }

  addlocation(x){
    //alert(x)
   
      this.router.navigate(['/kochar/addnewlocation',x]);
    
  }


}

