import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css']
})
export class EditTemplateComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  template_name:any;

  tempsensor = [
    {
      sensor_name: "Temp 1",
      room_name: "",
      port_number: 1,
      default_state: 0,
      gateway_id: "",
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor"
    },
    {
      sensor_name: "Temp 2",
      room_name: "",
      port_number: 2,
      default_state: 0,
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor"
    }
  ]

  id:string;
  template:any;
  port_number:any;
  sensor_name:any;
  room_name:any;
  default_state:any;
  alarm_type:any;

  ngOnInit(): void {



   

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
        this.backend.getTemplate(this.id)
    .subscribe((data)=> { 
     // console.log("Template Data for edit",data);
      this.template = data["data"][0].configuration;        

      //  for(var k = 0; k <this.template.length; k++){

      //   this.template[k] = this.

      //  }

      // this.port_number = this.template.port_number;
      // this.sensor_name = this.template.sensor_name;
      // this.room_name = this.template.room_name;
      
    });
  }

}
