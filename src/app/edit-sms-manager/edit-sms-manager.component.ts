import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-sms-manager',
  templateUrl: './edit-sms-manager.component.html',
  styleUrls: ['./edit-sms-manager.component.css']
})
export class EditSmsManagerComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }


  gateways:any;
  gateway:any;

  arm_by_platform1:any;
  arm_by_platform2:any;
  arm_by_platform3:any;
  arm_by_platform4:any;
  arm_by_platform5:any;
  arm_by_platform6:any;
  arm_by_platform7:any;
  arm_by_platform8:any;
  arm_by_platform9:any;
  arm_by_platform10:any;

  arm_by_keypad1:any;
  arm_by_keypad2:any;
  arm_by_keypad3:any;
  arm_by_keypad4:any;
  arm_by_keypad5:any;
  arm_by_keypad6:any;
  arm_by_keypad7:any;
  arm_by_keypad8:any;
  arm_by_keypad9:any;
  arm_by_keypad10:any;

  disarm_by_platform1:any;
  disarm_by_platform2:any;
  disarm_by_platform3:any;
  disarm_by_platform4:any;
  disarm_by_platform5:any;
  disarm_by_platform6:any;
  disarm_by_platform7:any;
  disarm_by_platform8:any;
  disarm_by_platform9:any;
  disarm_by_platform10:any;

  disarm_by_keypad1:any;
  disarm_by_keypad2:any;
  disarm_by_keypad3:any;
  disarm_by_keypad4:any;
  disarm_by_keypad5:any;
  disarm_by_keypad6:any;
  disarm_by_keypad7:any;
  disarm_by_keypad8:any;
  disarm_by_keypad9:any;
  disarm_by_keypad10:any;


  offline1:any;
  offline2:any;
  offline3:any;
  offline4:any;
  offline5:any;
  offline6:any;
  offline7:any;
  offline8:any;
  offline9:any;
  offline10:any;

  online1:any;
  online2:any;
  online3:any;
  online4:any;
  online5:any;
  online6:any;
  online7:any;
  online8:any;
  online9:any;
  online10:any;
 
  armda :any;
  disarmda:any;
  



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
        // console.log("Data:",data["data"][0]);
         this.gateway = data["data"][0].gateway_id
          this.data = data["data"][0];


          this.arm_by_platform1 = this.data.arm_by_platform[0];
          this.arm_by_platform2 = this.data.arm_by_platform[1];
          this.arm_by_platform3 = this.data.arm_by_platform[2];
          this.arm_by_platform4 = this.data.arm_by_platform[3];
          this.arm_by_platform5 = this.data.arm_by_platform[4];
          this.arm_by_platform6 = this.data.arm_by_platform[5];
          this.arm_by_platform7 = this.data.arm_by_platform[6];
          this.arm_by_platform8 = this.data.arm_by_platform[7];
          this.arm_by_platform9 = this.data.arm_by_platform[8];
          this.arm_by_platform10 = this.data.arm_by_platform[9];

          this.arm_by_keypad1 = this.data.arm_by_keypad[0];
          this.arm_by_keypad2 = this.data.arm_by_keypad[1];
          this.arm_by_keypad3 = this.data.arm_by_keypad[2];
          this.arm_by_keypad4 = this.data.arm_by_keypad[3];
          this.arm_by_keypad5 = this.data.arm_by_keypad[4];
          this.arm_by_keypad6 = this.data.arm_by_keypad[5];
          this.arm_by_keypad7 = this.data.arm_by_keypad[6];
          this.arm_by_keypad8 = this.data.arm_by_keypad[7];
          this.arm_by_keypad9 = this.data.arm_by_keypad[8];
          this.arm_by_keypad10 = this.data.arm_by_keypad[9];


          this.disarm_by_platform1 = this.data.disarm_by_platform[0];
          this.disarm_by_platform2 = this.data.disarm_by_platform[1];
          this.disarm_by_platform3 = this.data.disarm_by_platform[2];
          this.disarm_by_platform4 = this.data.disarm_by_platform[3];
          this.disarm_by_platform5 = this.data.disarm_by_platform[4];
          this.disarm_by_platform6 = this.data.disarm_by_platform[5];
          this.disarm_by_platform7 = this.data.disarm_by_platform[6];
          this.disarm_by_platform8 = this.data.disarm_by_platform[7];
          this.disarm_by_platform9 = this.data.disarm_by_platform[8];
          this.disarm_by_platform10 = this.data.disarm_by_platform[9];

          this.disarm_by_keypad1 = this.data.disarm_by_keypad[0];
          this.disarm_by_keypad2 = this.data.disarm_by_keypad[1];
          this.disarm_by_keypad3 = this.data.disarm_by_keypad[2];
          this.disarm_by_keypad4 = this.data.disarm_by_keypad[3];
          this.disarm_by_keypad5 = this.data.disarm_by_keypad[4];
          this.disarm_by_keypad6 = this.data.disarm_by_keypad[5];
          this.disarm_by_keypad7 = this.data.disarm_by_keypad[6];
          this.disarm_by_keypad8 = this.data.disarm_by_keypad[7];
          this.disarm_by_keypad9 = this.data.disarm_by_keypad[8];
          this.disarm_by_keypad10 = this.data.disarm_by_keypad[9];

          this.online1 = this.data.online[0];
          this.online2 = this.data.online[1];
          this.online3 = this.data.online[2];
          this.online4 = this.data.online[3];
          this.online5 = this.data.online[4];
          this.online6 = this.data.online[5];
          this.online7 = this.data.online[6];
          this.online8 = this.data.online[7];
          this.online9 = this.data.online[8];
          this.online10 = this.data.online[9];

          this.offline1 = this.data.offline[0];
          this.offline2 = this.data.offline[1];
          this.offline3 = this.data.offline[2];
          this.offline4 = this.data.offline[3];
          this.offline5 = this.data.offline[4];
          this.offline6 = this.data.offline[5];
          this.offline7 = this.data.offline[6];
          this.offline8 = this.data.offline[7];
          this.offline9 = this.data.offline[8];
          this.offline10 = this.data.offline[9];

          this.armda = this.data.arm;
          this.disarmda = this.data.disarm;

          


      });
      

    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
       // console.log("Data:",data["data"]);
        this.gateways = data["data"];
    });
  }

 
 
  onclick(z,x,y){
    if(z == 'arm_by_platform'){
      for(var k = 0; k<this.data.arm_by_platform.length;k++){
        if(k+1 == x){
          this.data.arm_by_platform[k] = y;
        }
      }
    }
    if(z == 'disarm_by_platform'){
      for(var k = 0; k<this.data.disarm_by_platform.length;k++){
        if(k+1 == x){
          this.data.disarm_by_platform[k] = y;
        }
      }
    }
    if(z == 'offline'){
      for(var k = 0; k<this.data.offline.length;k++){
        if(k+1 == x){
          this.data.offline[k] = y;
        }
      }
    }
    if(z == 'online'){
      for(var k = 0; k<this.data.online.length;k++){
        if(k+1 == x){
          this.data.online[k] = y;
        }
      }
    }
    if(z == 'arm_by_keypad'){
      for(var k = 0; k<this.data.arm_by_keypad.length;k++){
        if(k+1 == x){
          this.data.arm_by_keypad[k] = y;
        }
      }
    }
    if(z == 'disarm_by_keypad'){
      for(var k = 0; k<this.data.disarm_by_keypad.length;k++){
        if(k+1 == x){
          this.data.disarm_by_keypad[k] = y;
        }
      }
    }

  }


  
  disarm(z,x,y){

    if(z == 'first'){
      for(var k = 0; k<this.data.disarm["1"].length;k++){
        if(k+1 == x){
          this.data.disarm["1"][k] = y;
        }
      }
    }
    if(z == 'second'){
      for(var k = 0; k<this.data.disarm["2"].length;k++){
        if(k+1 == x){
          this.data.disarm["2"][k] = y;
        }
      }
    }
    if(z == 'third'){
      for(var k = 0; k<this.data.disarm["3"].length;k++){
        if(k+1 == x){
          this.data.disarm["3"][k] = y;
        }
      }
    }
    if(z == 'fourth'){
      for(var k = 0; k<this.data.disarm["4"].length;k++){
        if(k+1 == x){
          this.data.disarm["4"][k] = y;
        }
      }
    }
    if(z == 'fifth'){
      for(var k = 0; k<this.data.disarm["5"].length;k++){
        if(k+1 == x){
          this.data.disarm["5"][k] = y;
        }
      }
    }
    if(z == 'sixth'){
      for(var k = 0; k<this.data.disarm["6"].length;k++){
        if(k+1 == x){
          this.data.disarm["6"][k] = y;
        }
      }
    }
    if(z == 'seventh'){
      for(var k = 0; k<this.data.disarm["7"].length;k++){
        if(k+1 == x){
          this.data.disarm["7"][k] = y;
        }
      }
    }
    if(z == 'eighth'){
      for(var k = 0; k<this.data.disarm["8"].length;k++){
        if(k+1 == x){
          this.data.disarm["8"][k] = y;
        }
      }
    }
    if(z == 'nineth'){
      for(var k = 0; k<this.data.disarm["9"].length;k++){
        if(k+1 == x){
          this.data.disarm["9"][k] = y;
        }
      }
    }
    if(z == 'tenth'){
      for(var k = 0; k<this.data.disarm["10"].length;k++){
        if(k+1 == x){
          this.data.disarm["10"][k] = y;
        }
      }
    }if(z == 'eleventh'){
      for(var k = 0; k<this.data.disarm["11"].length;k++){
        if(k+1 == x){
          this.data.disarm["11"][k] = y;
        }
      }
    }if(z == 'tewelth'){
      for(var k = 0; k<this.data.disarm["12"].length;k++){
        if(k+1 == x){
          this.data.disarm["12"][k] = y;
        }
      }
    }

  }


  arm(z,x,y){

    if(z == 'first'){
      for(var k = 0; k<this.data.arm["1"].length;k++){
        if(k+1 == x){
          this.data.arm["1"][k] = y;
        }
      }
    }
    if(z == 'second'){
      for(var k = 0; k<this.data.arm["2"].length;k++){
        if(k+1 == x){
          this.data.arm["2"][k] = y;
        }
      }
    }
    if(z == 'third'){
      for(var k = 0; k<this.data.arm["3"].length;k++){
        if(k+1 == x){
          this.data.arm["3"][k] = y;
        }
      }
    }
    if(z == 'fourth'){
      for(var k = 0; k<this.data.arm["4"].length;k++){
        if(k+1 == x){
          this.data.arm["4"][k] = y;
        }
      }
    }
    if(z == 'fifth'){
      for(var k = 0; k<this.data.arm["5"].length;k++){
        if(k+1 == x){
          this.data.arm["5"][k] = y;
        }
      }
    }
    if(z == 'sixth'){
      for(var k = 0; k<this.data.arm["6"].length;k++){
        if(k+1 == x){
          this.data.arm["6"][k] = y;
        }
      }
    }
    if(z == 'seventh'){
      for(var k = 0; k<this.data.arm["7"].length;k++){
        if(k+1 == x){
          this.data.arm["7"][k] = y;
        }
      }
    }
    if(z == 'eighth'){
      for(var k = 0; k<this.data.arm["8"].length;k++){
        if(k+1 == x){
          this.data.arm["8"][k] = y;
        }
      }
    }
    if(z == 'nineth'){
      for(var k = 0; k<this.data.arm["9"].length;k++){
        if(k+1 == x){
          this.data.arm["9"][k] = y;
        }
      }
    }
    if(z == 'tenth'){
      for(var k = 0; k<this.data.arm["10"].length;k++){
        if(k+1 == x){
          this.data.arm["10"][k] = y;
        }
      }
    }if(z == 'eleventh'){
      for(var k = 0; k<this.data.arm["11"].length;k++){
        if(k+1 == x){
          this.data.arm["11"][k] = y;
        }
      }
    }if(z == 'tewelth'){
      for(var k = 0; k<this.data.arm["12"].length;k++){
        if(k+1 == x){
          this.data.arm["12"][k] = y;
        }
      }
    }

   // console.log(this.data)
  }


  onsubmit(){}
 

}
