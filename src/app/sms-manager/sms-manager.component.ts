import { Component, OnInit,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';


@Component({
  selector: 'app-sms-manager',
  templateUrl: './sms-manager.component.html',
  styleUrls: ['./sms-manager.component.css']
})
export class SmsManagerComponent implements OnInit {

  constructor(
              private router: Router,
    private backend: BackendconnectionService 
            ){ }

          
gateways:any;
gateway:any;
id: string;


add:any=false;

view:any=false;
edit:any=false;
delete:any=false;



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
          if(features[i].feature_name == 'SMS Manager'){
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
  k : any = [];

  getsetting(x){
    
    alert(x);


    this.backend.getsmssetting(x)
    .subscribe((data)=> { 
      //  console.log("Data:",data);
        this.k = data["data"];
    });

    // for(var i =0; i<this.gateways.length; i++){
    //   if(this.gateways[i].gateway_id == x){
    //     this.k = this.gateways[i].gateway;
    //   }
    // }
  }


  addnew(){
    this.router.navigate(['/kochar/addsmssetting']);
  }
  smsView(id) : void {
    // alert(id);
    this.router.navigate(['/kochar/viewsmssetting',id]);

  }

  smsEdit(id) : void {
    this.router.navigate(['/kochar/editsmartmeter',id]);

  }

  smsDelete(id) : void {
    // alert(id);
  }
  

}
