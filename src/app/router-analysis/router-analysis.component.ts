

import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-router-analysis',
  templateUrl: './router-analysis.component.html',
  styleUrls: ['./router-analysis.component.css']
})
export class RouterAnalysisComponent implements OnInit {

  constructor( private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  
  id:any;
  mac:any;
  data:any;
  video:any;
  iot:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.mac = params.get("mac");
  

      })

     

  }

  cmmd(x){
        var data = {
          "gl_mac_id":this.mac,
          "cmd": x
        }

       // console.log(data);
         
        this.backend.executeshellcommand(data)
        .subscribe((data)=> { 
         //   console.log("Data:",data);
  
        });


  }
 




}
