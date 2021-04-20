import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService 
  ) { }

  name:string;
  created_by:string;

  ngOnInit(): void {
  }



  onsubmit(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));

    const data = {
      name:this.name,
      created_by:da["name"]
    }
   // console.log(data);

    this.backend.addmodule(data)
    .subscribe((data)=> { 
     // console.log(data);
    });

  }


}
