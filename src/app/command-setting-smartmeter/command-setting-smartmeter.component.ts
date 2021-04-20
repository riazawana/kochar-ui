import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';
import {SocketioSendmsgService} from "../socketio-sendmsg.service";

@Component({
  selector: 'app-command-setting-smartmeter',
  templateUrl: './command-setting-smartmeter.component.html',
  styleUrls: ['./command-setting-smartmeter.component.css']
})
export class CommandSettingSmartmeterComponent implements OnInit {

  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<CommandSettingSmartmeterComponent>,
    private soc:SocketioSendmsgService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    setaddress:any;
   





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
