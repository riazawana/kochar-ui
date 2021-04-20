import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
@Component({
  selector: 'app-add-sms-manager',
  templateUrl: './add-sms-manager.component.html',
  styleUrls: ['./add-sms-manager.component.css']
})
export class AddSmsManagerComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService 
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
     "created_by":"",
     "mac_id":"",
     "client":""
    }
   

  ngOnInit(): void {
    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
      // console.log("Data:",data);
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

    //console.log(this.data)
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

  onsubmit(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));
    var datamul = this.gateway.split(",");

    this.data.gateway_id = datamul[0];
    this.data.client = datamul[1];
    this.data.mac_id = datamul[2];
    this.data.created_by = da["name"];


    this.backend.addsmssetting(this.data)
    .subscribe((data)=> { 
      // console.log("Data:",data);
    });

  }
  


 

}
