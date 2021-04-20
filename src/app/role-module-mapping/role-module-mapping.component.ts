
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {Router} from '@angular/router';


export interface UserData {
  sr_no: string;
  role:string;
  created_by: string;
  action:any;
}


@Component({
  selector: 'app-role-module-mapping',
  templateUrl: './role-module-mapping.component.html',
  styleUrls: ['./role-module-mapping.component.css']
})

export class RoleModuleMappingComponent implements AfterViewInit {
  displayedColumns: string[] = ['sr_no','role', 'created_by','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(
    private backend: BackendconnectionService,
    private router: Router
  ) {
  }

  add = true;
  delete = true;
  edit = true;
  view = true;


  ngAfterViewInit() {

   this.getrolemodules();

   
  }

  getrolemodules(){
    this.backend.getallrole_module_mappings()
    .subscribe((data)=> { 
      //  console.log("All roles:",data["data"]);
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

  deleterole_module_mapping(x){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.backend.deleterole_module_mapping(x)
      .subscribe((data)=> { 
  
        //  console.log("deleterole_module_mapping:",data);
         this.getrolemodules();
  
      });
    }
  }


  addrolemodulemapping(){
    this.router.navigate(['/kochar/addRoleModuleMappings']);
  }

  viewrolemodulemapping(x){
    this.router.navigate(['/kochar/viewrolemodulemapping',x]);
  }

  editrolemodulemapping(x){
    this.router.navigate(['/kochar/editrolemodulemapping',x]);
  }

  
}

