import { Component, OnInit,Inject } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {SocketioSendmsgService} from "../socketio-sendmsg.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommandSettingComponent } from '../command-setting/command-setting.component';  


export interface UserData {
  sr_no: string;
  name: string;
  config: string;
  action:any;
}

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css']
})


export class GatewaysComponent implements OnInit {

  arm = false;
  disarm = false;
  relay1 = false;
  relay2 = false;
  refresh = false;


  

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private soc:SocketioSendmsgService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CommandSettingComponent>,
    private router:Router,
  ) {
  }

  gateways:any;
  temp1 = 'NA';
  temp2 = 'NA';   
  ngOnInit() {
    var da = JSON.parse(sessionStorage.getItem('userdata'));


    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
      // console.log("All gateways:",data);

       this.gateways = data["data"];
   

    });

   
  }


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

 
}

