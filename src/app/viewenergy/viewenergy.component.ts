import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewenergy',
  templateUrl: './viewenergy.component.html',
  styleUrls: ['./viewenergy.component.css']
})
export class ViewenergyComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:string;
 
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
     // alert(this.id)
      })
     
    this.backend.getmodbus(this.id)
    .subscribe((data)=> { 
       //console.log("User Data",data);
      
   

    });
    

  }

  
  

  

}


