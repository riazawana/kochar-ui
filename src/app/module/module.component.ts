import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BackendconnectionService } from '../backendconnection.service';
import {Router} from '@angular/router';


export interface UserData {
  sr_no: string;
  name: string;
  created_by: string;
}


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})

export class ModuleComponent implements AfterViewInit {
  displayedColumns: string[] = ['sr_no', 'name', 'created_by'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(
    private backend: BackendconnectionService,
    private router: Router
  ) {
  }

  ngAfterViewInit() {

    this.backend.getallmodules()
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


  addmodule(){
    this.router.navigate(['/kochar/addmodule']);
  }

  
}

