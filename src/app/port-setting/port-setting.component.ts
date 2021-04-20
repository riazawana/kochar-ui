import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-port-setting',
  templateUrl: './port-setting.component.html',
  styleUrls: ['./port-setting.component.css']
})
export class PortSettingComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }

  alarm:any;
  default:any;
  port_no:any;
  name:any;
  sensor_type:any;
  room:any;
  newdata:any;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    //  console.log("Data in port setting",JSON.parse(params.get("data")));

    this.newdata = JSON.parse(params.get("data"));

    
    this.port_no = this.newdata.port_number;
    this.alarm = this.newdata.alarm_type;
    this.default = this.newdata.default_state;
    this.name = this.newdata.sensor_name;
    this.room = this.newdata.room_name;
    this.sensor_type = this.newdata.sensor_type;

    


      })
  }
  onsubmit(){

    this.newdata.port_number = this.port_no ;
    this.newdata.alarm_type = this.alarm;
    this.newdata.default_state = this.default;
    this.newdata.sensor_name = this.name;
    this.newdata.room_name = this.room;
    this.newdata.sensor_type = this.sensor_type;
      // console.log(this.newdata);
    this.backend.updatedevice(this.newdata)
    .subscribe((data)=> { 
      //  console.log("Data:",data);
    });


  }

}
