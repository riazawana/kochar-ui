import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addvideogateway',
  templateUrl: './addvideogateway.component.html',
  styleUrls: ['./addvideogateway.component.css']
})
export class AddvideogatewayComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }


  location_id:any;
  zone_id:string;
  zone_name:string;
  location_name:string;
  user_id:any;
  client:any;
  host_add:any;
  username:any;
  password:any;
  name:any;
  brand:any;
  mac_id:any;
  rtsp_port:any;
  analog_ports_count:any;
  cat:any;


  ngOnInit(): void {

    this.user_id =  sessionStorage.getItem('userid');
    this.route.paramMap.subscribe(params => {
      this.zone_id = params.get("idz");
      this.location_id = params.get("id");
      })

      this.backend.getZone(this.zone_id)
    .subscribe((data)=> {
      // console.log(data["data"]);
      this.zone_name = data["data"][0].name;
      this.client = data["data"][0].client;


     })

     this.backend.getlocation(this.location_id)
     .subscribe((data)=> {
      //  console.log(data);
       this.location_name = data["data"][0].name;
      })

    
  }


  selectedIndex: number = 0;

 nextStep(x) {
    this.selectedIndex = x;
  }

  previousStep(x) {
    this.selectedIndex = x;
  }


  submit(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));


    var data = {
      host: this.host_add,
      username: this.username,
      password: this.password,
      brand: this.brand,
      name: this.name,
      location_id: this.location_id,
      user_id: this.user_id,
      mac_id: this.mac_id,
      gateway_type: this.cat,
      rtsp_port: this.rtsp_port,
      created_by: da["name"],
      zone_name: this.zone_name,
      location_name: this.location_name,
      client:this.client,
      analog_ports_count:this.analog_ports_count,

    }
 

  //  console.log(data);
    
    this.backend.addvideogateways(data)
    .subscribe((data)=> { 
      // console.log("Data:",data);
    });

  }



}
