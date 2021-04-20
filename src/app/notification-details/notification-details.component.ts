import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }
  id:any;
  data:any;
  date:any = "";
  cli:any;
  ngOnInit(): void {
    

     this.route.paramMap.subscribe(params => {

      // console.log(params.get("id"))
      this.id = params.get("id");
      this.cli = params.get("cli");
               
            this.backend.getnotification(this.id,this.cli)
          .subscribe((data)=> { 
            // console.log("Data:",data);
            this.data = data["data"].notification[0];
              this.date = this.data.send_time;
            // console.log("Data:",this.data);
            this._id = this.data._id;


          });

      })

    

  }


  valid:Boolean = false;
  voicelog:String = "";
  remarks:String = "";
  _id:String="";


  update(){
    var data = {
      _id:this._id,
      valid:this.valid,
      voicelog:this.voicelog,
      remarks:this.remarks,
      client:this.cli
    }
      //  console.log(data);

       this.backend.updatenotification(data)
          .subscribe((data)=> { 
            // console.log("Mess:",data);
          });
  }

}
