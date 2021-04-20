import { Component, OnInit, Inject } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { DetailsModalComponent } from '../details-modal/details-modal.component';         
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-health-dash',
  templateUrl: './health-dash.component.html',
  styleUrls: ['./health-dash.component.css']
})
export class HealthDashComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<HealthDashComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }
  
    id:string;
    healthdata:any;
   faMapMarker = faMapMarkerAlt;

  
   
  ngOnInit(): void {

    


        this.backend.healthDashboard()
        .subscribe((data)=> { 
          // console.log("All location:",data["data"]);
           this.healthdata = data["data"];
        });

  }



  detailsVideo(x): void {
    var countonline = 0;
    var countoffline = 0;

    for(var a = 0; a < x.length; a++){
      if(x[a].camera_status == 'true'){
       countonline++;
      }else{
       countoffline++;
      }
    }


    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: {type: 'Video',online:countonline,offline:countoffline}    
    },
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
  detailsIN(x,y,z): void {
    var rssi_val = x[0].split("|");
   
    alert(y);
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: {type: 'IN',rssi:rssi_val[0],mode:y,keypad:z}    
    },
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  

  

  detailsRouer(x): void {
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: {type: 'Router',mac_id:x}    
    },
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
 

  onNoClick(): void {
   this.dialogRef.close();
 }

}


























