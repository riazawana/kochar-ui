import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }


  gateway_id:string = "0";
  location_id:any;


  // controller

  w_c_t;
  w_c_n;
  w_c_m_a;
  gl_mac;
  gl_num;

  //port

   sensordata = [{
    sensor_name:"",
    room_name:"",
    port_number:1,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:2,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:3,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:4,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:5,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:6,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:7,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:8,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:9,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:10,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:11,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   },
   {
    sensor_name:"",
    room_name:"",
    port_number:12,
    user_id: "",
    gateway_id: "",
    default_state:0,
    alarm_type:0,
    for_temperature:false,
    created_by:"",
    sensor_type:"",
    client:"",
    mac_id:""
   }
  
  
  ]

  tempsensor = [
    {
      sensor_name: "Temp 1",
      room_name: "",
      port_number: 13,
      default_state: 0,
      created_by:"",
      user_id: "",
      gateway_id: "",
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor",
      client:"",
      mac_id:""
    },
    {
      sensor_name: "Temp 2",
      room_name: "",
      port_number: 14,
      default_state: 0,
      created_by:"",
      user_id: "",
      gateway_id: "",
      alarm_type: 0,
      for_temperature: true,
      sensor_type: "temperature sensor",
      client:"",
      mac_id:""
    }
  ]

  zone_id:string;
  zone_name:string;
  location_name:string;
  user_id:any;

  ngOnInit(): void {

    this.user_id =  sessionStorage.getItem('userid');

    this.route.paramMap.subscribe(params => {
      this.zone_id = params.get("idz");
      this.location_id = params.get("id");
      })

      this.backend.getZone(this.zone_id)
    .subscribe((data)=> {
     // console.log(data["data"][0].name);
      this.zone_name = data["data"][0].name;
      this.client = data["data"][0].client;


     })

     this.backend.getlocation(this.location_id)
     .subscribe((data)=> {
       //console.log(data);
       this.location_name = data["data"][0].name;
      })

    this.getalltemplate();
    
  }


  selectedIndex: number = 0;

 nextStep(x) {
    // if (this.selectedIndex != 3) {
    //   this.selectedIndex = this.selectedIndex + 1;
    // }
    this.selectedIndex = x;
    // console.log(this.selectedIndex);
  }

  previousStep(x) {
    // if (this.selectedIndex != 0) {
    //   this.selectedIndex = this.selectedIndex - 1;
    // }
    this.selectedIndex = x;

    // console.log(this.selectedIndex);
  }

  
  

 

   alltemplate : any;

  getalltemplate(){
    this.backend.getalltemplate()
    .subscribe((data)=> { 
      //  console.log("temp:",data["data"]);
       this.alltemplate = data["data"];
    });
    
  }
  sel_temp = "0"
  submit_seltemp(x){
     

    this.backend.gettemplate(x)
    .subscribe((data)=> { 
       console.log("Data:",data);
        var getiotgatway = data["data"][0].configuration;

    var newdata = this.sensordata.concat(this.tempsensor);
    
    for(var k = 0; k < newdata.length; k++){

      newdata[k].alarm_type = getiotgatway[k].alarm_type;
      newdata[k].default_state = getiotgatway[k].default_state;
      newdata[k].for_temperature = getiotgatway[k].for_temperature;
      newdata[k].port_number = getiotgatway[k].port_number;
      newdata[k].room_name = getiotgatway[k].room_name;
      newdata[k].sensor_name = getiotgatway[k].sensor_name;
      newdata[k].sensor_type = getiotgatway[k].sensor_type;
    }

    this.nextStep(2);

    });

  }

 

  client:any;

  submot_iotgateway(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));


    var data = {
      controller_type: "wired",
      relay1_name: "Relay 1",
      relay2_name: "Relay 2",
      configuration: this.w_c_t,
      name: this.w_c_n,
      location_id: this.location_id,
      user_id: da["name"],
      mac_id: this.w_c_m_a,
      router_mac_id: this.gl_mac,
      router_number: this.gl_num,
      created_by: da["name"],
      zone_name: this.zone_name,
      location_name: this.location_name,
      client:this.client
    }

   // console.log(data);
    
    this.backend.addiotgateway(data)
    .subscribe((data)=> { 
     //  console.log("Data:",data);
       this.gateway_id =  data["gateway_id"];
       this.nextStep(1);

    });

  }

  submit_port(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));

    var data = this.sensordata.concat(this.tempsensor);
    //console.log(data);
    for(var k = 0; k<data.length; k++){
              data[k].created_by = da["name"];
              data[k].user_id = this.user_id;
              data[k].gateway_id = this.gateway_id;
              data[k].client = this.client;
              data[k].mac_id = this.w_c_m_a;
    }
    
    var newdata = {
      "data": data
  }
    
    this.backend.adddevice(newdata)
    .subscribe((data)=> { 
      // console.log("Data:",data);
       //this.nextStep();

    });

    // console.log(this.sensordata);
  }



}
