import { Component, OnInit,Inject } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {SocketioSendmsgService} from "../socketio-sendmsg.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommandSettingSmartmeterComponent } from '../command-setting-smartmeter/command-setting-smartmeter.component';  

@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css']
})
export class SmartMeterComponent implements OnInit {


   
   
 
   constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private soc:SocketioSendmsgService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CommandSettingSmartmeterComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    id:string;
   modbus:any;
   faMapMarker = faMapMarkerAlt;

   panelOpenState = false;

   


  

   onNoClick(): void {
    this.dialogRef.close();
  }


  /////////////////////////modal 2/////////////////////////////////////
     openDialog(id): void {
       alert(id)
       const dialogRef = this.dialog.open(CommandSettingSmartmeterComponent, {
         width: '600px',
         data: {id: id}    
       },
       );

       dialogRef.afterClosed().subscribe(result => {
        //  console.log('The dialog  two was closed');
       });
     }
   
  ngOnInit(): void {

   

    this.backend.getmodbususerwise()
    .subscribe((data)=> { 
      //  console.log("Modbus",data["data"]);
       this.modbus = data["data"];

    });



  }


  addsmartmeter(x){
      // alert(x);
      this.router.navigate(['/kochar/addsmartmeter',x])

  }





  

}
