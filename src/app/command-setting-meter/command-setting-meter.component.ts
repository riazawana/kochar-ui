import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';
import {SocketioSendmsgService} from "../socketio-sendmsg.service";

@Component({
  selector: 'app-command-setting-meter',
  templateUrl: './command-setting-meter.component.html',
  styleUrls: ['./command-setting-meter.component.css']
})
export class CommandSettingMeterComponent implements OnInit {


  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<CommandSettingMeterComponent>,
    private soc:SocketioSendmsgService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    pinginterval1:any;
    pinginterval2:any;

    pingurl1:any;
    pingurl2:any;


    enableapm:any;

    relaystatus:any;

    firmwarevirsion1:any;
    firmwarevirsion2:any;





    ngOnInit(): void {
     // console.log(typeof this.data.id)
      // alert(this.data.id)
    }

    onNoClick(): void {
     this.dialogRef.close();
   }
 

    sendMessage(x,y,mac) {
      var data = {
        mac:mac,
        type:x,
        value:y
      }
       
     this.soc.sendMsg(data);
  
     
   }

   get(x,y){

   }

    

}
