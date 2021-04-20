import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendconnectionService } from '../backendconnection.service';
declare const Hls: any;

@Component({
  selector: 'app-camera-modal',
  templateUrl: './camera-modal.component.html',
  styleUrls: ['./camera-modal.component.css']
})

export class CameraModalComponent implements OnInit {

  constructor( 
    private backend: BackendconnectionService,
    public dialogRef: MatDialogRef<CameraModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    records:any;
    

  ngOnInit(): void {

    // alert(this.data.url);
    // alert(this.data.isRecording);

   
    var senddata = {
      rtspUrl: this.data.url, 
      isRecording: this.data.isRecording
    }
    this.backend.sendCommandToStartRtspProcessing(senddata).subscribe((rs)=> { 
      // console.log("Data",rs['liveUrl']);
  
     

      setTimeout(() => {
      var  video_file_checker =  setInterval(function(){ 
        fetch('https://localhost:9999'+rs['liveUrl']).then(res=>{
        if (res.status == 200) {
          var video = (<HTMLMediaElement>document.getElementById("video"));
          var videoSrc = 'https://localhost:9999'+rs['liveUrl'];
          // console.log(videoSrc)
          if (Hls.isSupported()) {

            // alert(1);
            var hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED,function() {
              video.play();
            });
          }
          else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = 'https://localhost:9999'+rs['liveUrl'];
            video.addEventListener('loadedmetadata',function() {
              video.play();
            });
          }
          clearInterval(video_file_checker);
        }
      })
       }, 500);
      },1000)

    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}




