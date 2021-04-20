


import { Component, OnInit,Inject } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {SocketioSendmsgService} from "../socketio-sendmsg.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommandSettingMeterComponent } from '../command-setting-meter/command-setting-meter.component';  

@Component({
  selector: 'app-secondry-gateway',
  templateUrl: './secondry-gateway.component.html',
  styleUrls: ['./secondry-gateway.component.css']
})
export class SecondryGatewayComponent implements OnInit {

 

   
   
 
   constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private soc:SocketioSendmsgService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CommandSettingMeterComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    id:string;
   modbus:any;
   faMapMarker = faMapMarkerAlt;

   panelOpenState = false;

   temp1 = 'NA';
   temp2 = 'NA';

    isChecked = 0;


  



  /////////////////////////modal 2/////////////////////////////////////
     openDialog(id): void {
      //  alert(id)
       this.dialogRef = this.dialog.open(CommandSettingMeterComponent, {
         width: '600px',
         height:'600px',
         data: {id: id}    
       },
       );

       this.dialogRef.afterClosed().subscribe(result => {
        //  console.log('The dialog  two was closed');
       });
     }

    

     relayonclick(x,y){
      //  alert(x+","+y);
     }
   
  ngOnInit(): void {

  

    this.backend.getmodbususerwise()
    .subscribe((data)=> { 
      //  console.log("Modbus",data["data"]);
       this.modbus = data["data"];

    });



  }





  

}
