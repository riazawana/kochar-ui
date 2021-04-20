import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';
import { CameraModalComponent } from '../camera-modal/camera-modal.component';  
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-getallrecord-modal',
  templateUrl: './getallrecord-modal.component.html',
  styleUrls: ['./getallrecord-modal.component.css']
})
export class GetallrecordModalComponent implements OnInit {

  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<GetallrecordModalComponent>,
    public dialogRef2: MatDialogRef<GetallrecordModalComponent>,
    private dialog: MatDialog,
    private dialog2: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    records:any;

    getlivefeed(x){
     const dialogRef2 = this.dialog2.open(CameraModalComponent, {
       data: {url: x,isRecording:true}    
     },
     );
     dialogRef2.afterClosed().subscribe(result => {
     });
   }
   

    onNoClick2(): void {
     this.dialogRef2.close();
    }
    
    ngOnInit(): void {
      var start = this.data.start.toISOString();
      var end = this.data.end.toISOString();
      
      this.backend.recordedVideos(this.data.mac,start,end,this.data.id)
      .subscribe((data)=> { 
          // console.log("All Record:",data["data"].data);
          this.records = data["data"].data;
      });

      //////////////////////////
      this.getAllRtspProcesses();
      setInterval(() => {
          this.fetchAndPopulateResourcesUsage();
          this.getAllRtspProcesses();
      }, 5000);
      setInterval(() => {
        this.in_progress_downloads.map((obj) => {
          this.getDownloadStatus(obj.url);
        })
      }, 10000);
      ////////////////////////////
    
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    in_progress_downloads:any = []

   index = '';
    download(x,i){
      this.index = i;
    var senddata = {
      rtspUrl: x
    }
    var  md5_rtsp =   this.md5OfRtsp(x);
    this.backend.startRTSPDownloading(senddata).subscribe((rs)=> { 
        // console.log("Data",rs);
        if(rs["success"]){
          this.in_progress_downloads.push({ "url" : md5_rtsp }); 
          this.showDownloadInProgress(md5_rtsp); 
          this.getAllRtspProcesses();      
        }
    });
    }

    showDownloadInProgress(md5_rtsp) 
        {
          // console.log("showprogress:",md5_rtsp);  
        //   $("#" + md5_rtsp + " .progress .progress-bar").removeClass("bg-success").addClass("progress-bar-striped progress-bar-animated"); 
        // $("#" + md5_rtsp + " .info").addClass("text-primary").html("<p><small>Please wait while your file is being downloaded!</small></p>"); 
        // $("#" + md5_rtsp).removeClass("hide"); 
        // alert(this.index);
     (<HTMLInputElement>document.getElementById("download"+this.index)).style.display = "block";
     (<HTMLInputElement>document.getElementById("download"+this.index)).innerHTML = "Download Progress";


    }

    md5OfRtsp(rtsp_url) { 
      return CryptoJS.MD5(rtsp_url + "recording").toString();
    }

    cam_list : any;

    getAllRtspProcesses() {
    this.backend.camera_list().subscribe((rs)=> { 
    // console.log("camera-list:",rs);
    this.backend.cam_list = rs["data"];

    })	
    }

    showDownloadComplete(md5_rtsp) {
    //  console.log("download completed:",md5_rtsp);
     (<HTMLInputElement>document.getElementById("download"+this.index)).style.display = "none";
     (<HTMLInputElement>document.getElementById("download"+this.index)).innerHTML = "Download Complete";


    }


    getDownloadStatus(md5_rtsp) {
      this.backend.check_status(md5_rtsp).subscribe((rs)=> { 
        if(rs["status"] == "done") {
          this.in_progress_downloads = this.in_progress_downloads.filter(function(value) {
            return value !== md5_rtsp;
        })
        this.showDownloadComplete(md5_rtsp);
    } else if(rs["status"] == "in-progress") {
        this.showDownloadInProgress(md5_rtsp)
    } else {
        // console.log(rs);
    }
    })
    }




    fetchAndPopulateResourcesUsage() {
      this.backend.resources_usage().subscribe((rs)=> { 
        if(rs["success"]) {
          // console.log(rs);
          //creat small table
          // console.log(rs["data"].cpuUsage);
          (<HTMLInputElement>document.getElementById("acu")).innerHTML = rs["data"].cpuUsage;
          (<HTMLInputElement>document.getElementById("ru")).innerHTML = rs["data"].usedRamPercent;
          (<HTMLInputElement>document.getElementById("tcu")).innerHTML = rs["data"].totalCpuUsage;
          (<HTMLInputElement>document.getElementById("al")).innerHTML = rs["data"].loadAvg;
      } else {
          // console.log(rs["data"].cpuUsage);
          (<HTMLInputElement>document.getElementById("acu")).innerHTML = '0';
          (<HTMLInputElement>document.getElementById("ru")).innerHTML = '0';
          (<HTMLInputElement>document.getElementById("tcu")).innerHTML = '0';
          (<HTMLInputElement>document.getElementById("al")).innerHTML = '0';
      }
      });
    }


     stopRtspProcess(process_id) {
      this.backend.resources_usage().subscribe((rs)=> { 
        if(rs["success"]) {
          this.getAllRtspProcesses();
      } else {
          // console.log(rs);
      }
      })
      }
      }
