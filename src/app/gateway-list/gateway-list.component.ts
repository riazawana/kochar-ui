import { Component, OnInit,Inject } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {SocketioSendmsgService} from "../socketio-sendmsg.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommandSettingComponent } from '../command-setting/command-setting.component';  

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css']
})
export class GatewayListComponent implements OnInit {

 

   id:string;
   idz:any;
   gateway:any;
   faMapMarker = faMapMarkerAlt;

   panelOpenState = false;

   temp1 = 'NA';
   temp2 = 'NA';
   
 
   constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private soc:SocketioSendmsgService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CommandSettingComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    arm = false;
    disarm = false;
    relay1 = false;
    relay2 = false;
    refresh = false;
    command_setting = false;
    port_setting = false;


  

   onNoClick(): void {
    this.dialogRef.close();
  }


  /////////////////////////modal 2/////////////////////////////////////
     openDialog(id): void {
       const dialogRef = this.dialog.open(CommandSettingComponent, {
         width: '650px',
         height: '800px',
         data: {id: id}    
       },
       );

       dialogRef.afterClosed().subscribe(result => {
        //  console.log('The dialog  two was closed');
       });
     }
   
  ngOnInit(): void {

    var role = sessionStorage.getItem('role');

    if(role == 'admin'){
      setTimeout(() => {
         this.arm = true;
      this.disarm = true;
      this.relay1 = true;
      this.relay2 = true;
      this.refresh = true;
      this.command_setting = true;
      this.port_setting = true;
      });
    }else{
    
      setTimeout(() => {
        var features = JSON.parse(sessionStorage.getItem('features'));
        for(var i = 0; i < features.length; i++){
          // alert(this.arm+",arm")
          // alert(this.disarm+",disarm")
          // alert(this.refresh+",refresh")
          // alert(this.command_setting+",comman")

          if(features[i].feature_name == 'ARM'){
             if(features[i].action == true){
            this.arm = true;
             }
            }
          if(features[i].feature_name == 'DISARM'){

             if(features[i].action == true){
              this.disarm = true;
               }
              }
          if(features[i].feature_name == 'Refresh'){

               if(features[i].action == true){
                this.refresh = true;
                 }
                }
          if(features[i].feature_name == 'Relay 1'){

                if(features[i].action == true){
                  this.relay1 = true;
                   }
                   }
          if(features[i].feature_name == 'Relay 2'){
                   
                   if(features[i].action == true){
                    this.relay2 = true;
                     }
                    }
          if(features[i].feature_name == 'Command Settings'){
                    
                    if(features[i].action == true){
                      this.command_setting = true;
                       }
                      }
          if(features[i].feature_name == 'Port Settings'){
                      
                      if(features[i].action == true){
                        this.port_setting = true;
                         }
                        }
    
          } 
        
        
       }, 1);
    }

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.idz = params.get("idz");

      })

    this.backend.getgatewaylocationwise(this.id)
    .subscribe((data)=> { 
      // console.log("All gateway:",data["data"]);
       this.gateway = data["data"];
    });

  }


  sendMessage(x,y,mac) {
    var data = {
      mac:mac,
      type:x,
      value:y
    }
     
   this.soc.sendMsg(data);

   
 }


 port_set(p){
  // console.log("port:",p)
   this.router.navigate(['/kochar/port_set',JSON.stringify(p)]);

 }


 addgatways(){
  this.router.navigate(['/kochar/addgateway',this.idz,this.id]);

 }

 edit(x,y){
  // alert(x);
  // alert(y);
 }
  
 delete(x,y){
  this.backend.deleteiotgateway(x,y)
  .subscribe((data)=> { 
   //  console.log(data);
  });
}

}
