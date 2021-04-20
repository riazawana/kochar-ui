import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addsub-module',
  templateUrl: './addsub-module.component.html',
  styleUrls: ['./addsub-module.component.css']
})
export class AddsubModuleComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }

   moduledata :any;
   name:any;
   Module:any;


  ngOnInit(): void {

    

      this.backend.getallmodules()
    .subscribe((data)=> { 
      //console.log(data);
      this.moduledata = data["data"];

    })
  }


  

 onsubmit(){
   var data = {
     name:this.name,
     modulename:this.Module
   }

   //console.log(data);

   this.backend.addsubmodule(data)
    .subscribe((data)=> { 
     // console.log(data);
      

    })
 }
 
 

  






}
