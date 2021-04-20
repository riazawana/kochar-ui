import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.css']
})
export class ViewTemplateComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  sensordata = [{
    sensor_name:"",
    room_name:"",
    port_number:1,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:2,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:3,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:4,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:5,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:6,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:7,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:8,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:9,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:10,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:11,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:12,
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    sensor_type:"",
   }
  
  
  ]

  tempsensor = [
    {
      sensor_name: "Temp 1",
      room_name: "",
      port_number: 13,
      default_state: 0,
      gateway_id: "",
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor"
    },
    {
      sensor_name: "Temp 2",
      room_name: "",
      port_number: 14,
      default_state: 0,
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor"
    }
  ]

  id:string;
  template:any;
  template_name:any;

   view = false;

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
        this.backend.getTemplate(this.id)
    .subscribe((data)=> { 

      this.template_name = data["data"][0].name
     // console.log("Template Data for edit",data);
      this.sensordata = data["data"][0].configuration;   

      
      
    });
  }

}
