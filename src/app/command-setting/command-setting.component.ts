import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';
import {SocketioSendmsgService} from "../socketio-sendmsg.service";


@Component({
  selector: 'app-command-setting',
  templateUrl: './command-setting.component.html',
  styleUrls: ['./command-setting.component.css']
})
export class CommandSettingComponent implements OnInit {

  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<CommandSettingComponent>,
    private soc:SocketioSendmsgService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    alarm:any;
  default:any;
  port_no:any;
  name:any;
  sensor_type:any;
  room:any;


  relaytriger:any;
  pollingtime:any;

  url:any;

  

  KeyPad:any;  armval:any;  disarmval:any;  Firmware:any;  Calibrate:any;
  Restart:any;
  Reboot:any;


    ngOnInit(): void {
     
     // console.log(typeof this.data.id)

      //alert(this.data.id)
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

    

}
