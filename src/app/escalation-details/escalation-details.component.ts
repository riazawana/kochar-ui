import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';


@Component({
  selector: 'app-escalation-details',
  templateUrl: './escalation-details.component.html',
  styleUrls: ['./escalation-details.component.css']
})
export class EscalationDetailsComponent implements OnInit {

  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<EscalationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    alluser:any;
    
  ngOnInit(): void {
     
    // console.log( this.data.id)
    // console.log( this.data.mac_id)
    // console.log( this.data.name)


    this.backend.getescalationmatrix(this.data.id,this.data.mac_id,this.data.name)
    .subscribe((data)=> { 
        // console.log("All user of escalation:",data);

       this.alluser = data["data"];

    });
    

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
