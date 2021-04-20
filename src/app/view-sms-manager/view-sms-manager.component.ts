import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-sms-manager',
  templateUrl: './view-sms-manager.component.html',
  styleUrls: ['./view-sms-manager.component.css']
})
export class ViewSmsManagerComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }


  gateways:any;
  gateway:any;

   data = {
    "gateway_id": "",
    "arm_by_platform": [false, false, false,false,false,false,false, false, false, false],
    "disarm_by_platform": [false, false, false,false,false,false,false, false, false, false],
    "offline": [false, false, false,false,false,false,false, false, false, false],
    "online": [false, false, false,false,false,false,false, false, false, false],
    "arm_by_keypad": [false, false, false,false,false,false,false, false, false, false],
    "disarm_by_keypad": [false, false, false,false,false,false,false, false, false, false],
    "arm": {
    "1" :[false, false, false,false,false,false,false, false, false, false],
    "2" :[false, false, false,false,false,false,false, false, false, false],
    "3" :[false, false, false,false,false,false,false, false, false, false],
    "4" :[false, false, false,false,false,false,false, false, false, false],
    "5" :[false, false, false,false,false,false,false, false, false, false],
    "6" :[false, false, false,false,false,false,false, false, false, false],
    "7" :[false, false, false,false,false,false,false, false, false, false],
    "8" :[false, false, false,false,false,false,false, false, false, false],	
    "9" :[false, false, false,false,false,false,false, false, false, false],
    "10" :[false, false, false,false,false,false,false, false, false, false],
    "11" :[false, false, false,false,false,false,false, false, false, false],
    "12" :[false, false, false,false,false,false,false, false, false, false]  
     },
    "disarm": {
      "1" :[false, false, false,false,false,false,false, false, false, false],
      "2" :[false, false, false,false,false,false,false, false, false, false],
      "3" :[false, false, false,false,false,false,false, false, false, false],
      "4" :[false, false, false,false,false,false,false, false, false, false],
      "5" :[false, false, false,false,false,false,false, false, false, false],
      "6" :[false, false, false,false,false,false,false, false, false, false],
      "7" :[false, false, false,false,false,false,false, false, false, false],
      "8" :[false, false, false,false,false,false,false, false, false, false],	
      "9" :[false, false, false,false,false,false,false, false, false, false],
      "10" :[false, false, false,false,false,false,false, false, false, false],
      "11" :[false, false, false,false,false,false,false, false, false, false],
      "12" :[false, false, false,false,false,false,false, false, false, false]  
     },
     "created_by":""
    }
  id:any;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })

      this.backend.getsmssetting(this.id)
      .subscribe((data)=> { 
        //  console.log("Data:",data);
         this.gateway = data["data"][0].gateway_id
          this.data = data["data"][0];
      });
      

    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
      //  console.log("Data:",data["data"]);
        this.gateways = data["data"];
    });
  }

 


 

}
