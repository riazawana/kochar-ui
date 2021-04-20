import { Component, OnInit,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';


@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.css']
})
export class NotificationManagerComponent implements OnInit {

  constructor(
              private router: Router,
    private backend: BackendconnectionService 
            ){ }

isvalid:boolean=false; 
add:boolean = false;
edit:boolean = false;
view:boolean = false;
delete:boolean = false;

gateways:any;

 data =  [
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 1
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 2
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 3
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 4
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 5
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 6
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 7
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 8
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 9
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 10
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 11
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 12
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 13
  },
  {
      "_id": "",
      "notif_arm": false,
      "notif_diarm": false,
      "sensor_name": "",
      "port_number": 14
  }
]

  ngOnInit(){

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
          if(features[i].feature_name == 'Notification Manager'){
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

    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
      //  console.log("Data:",data);
        this.gateways = data["data"];
    });
    
  }
  ports:any = [];
gateway:any;

  getport(x){
    this.backend.getnotificationsettings(x)
    .subscribe((data)=> { 
      //  console.log("Data:",data);
        this.ports = data["data"];
        
        this.data = data["data"];

    });

  }

  onclick(type,value,id){
       
   for(var k = 0; k<this.data.length; k++){
        if(this.data[k]._id == id){
          if(type == "notif_arm"){
            this.data[k].notif_arm = value;
          }else{
            this.data[k].notif_diarm = value;
          }
        }
   }


  }


  submit(){
    // console.log(this.data);
     var da = {
       data:this.data
     }
    this.backend.updatenotificationsettings(da)
    .subscribe((data)=> { 
      //  console.log("Data:",data);

    });

  }
  

}
