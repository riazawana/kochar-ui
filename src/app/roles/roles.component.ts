import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {Router} from '@angular/router';


export interface UserData {
  sr_no: string;
  name: string;
  action:string;
}


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements AfterViewInit {
  displayedColumns: string[] = ['sr_no', 'name','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(
    private backend: BackendconnectionService,
    private router: Router
  ) {
  }

  edit:boolean = true;
  delete:boolean = true;
  view:boolean = true;
  add:boolean = true;

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
          if(features[i].feature_name == 'Roles'){
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
      



    this.backend.getallroles()
    .subscribe((data)=> { 
      //  console.log("All roles:",data['data']);
       this.dataSource = new MatTableDataSource(data['data']);
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


  addrole(){
    this.router.navigate(['/kochar/addrole']);
  }

  viewrole(x){
    alert(x)
    this.router.navigate(['/kochar/viewrole',x]);
  }

  editrole(x){
    this.router.navigate(['/kochar/editrole',x]);
  }

  deleterole(x){
    this.backend.deleterole(x)
    .subscribe((data)=> { 
      //  console.log("data",data['data']);
    });

  }

  
}

