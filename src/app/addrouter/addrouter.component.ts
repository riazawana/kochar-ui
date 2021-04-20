


import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-addrouter',
  templateUrl: './addrouter.component.html',
  styleUrls: ['./addrouter.component.css']
})
export class AddrouterComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }

  
  gateway_id:string = "0";


 

 
  location_id:string = "0";
  // router

  r_name:any;
  m_a:any;
  mob:any;
  imsi:any;
  sim:any;


  // tunneling

  gl_mac_id:any;
  d_mac_id:any;
  port:any;

 


 

  zone_id:string;
  location_name:any;
  zone_name:any;
  client:any;
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.location_id = params.get("id");
      })

      this.backend.getlocation(this.location_id)
    .subscribe((data)=> { 
    //  console.log(data);
      this.location_name = data["data"][0].name;
      this.zone_name = data["data"][0].zone_name; 
      this.client = data["data"][0].client; 
    })
  }


  selectedIndex: number = 0;

 nextStep(x) {
   
    this.selectedIndex = x;
  }

  previousStep(x) {
  
    this.selectedIndex = x;

  }

  location_list:any;



 
 

 

   
 
  submit_router(){
    
 var da = {
  "name": this.r_name,
  "mac_id": this.m_a,
  "location_id": this.location_id,
  "sim_number": this.mob,
  "imsi_number": this.imsi,
  "sim_operator": this.sim,
  "location_name":this.location_name,
  "zone_name":this.zone_name,
  "client":this.client
 }
    this.backend.addrouter(da)
    .subscribe((data)=> { 
      // console.log("Data:",data);
       //this.location_id = data["location_id"];
       this.nextStep(1);
    });
  }

  tunneling(){

  }
  
  

   flag = false;
  registertunnel(){

    var data = {
      "gl_mac_id":this.gl_mac_id,
      "deviceMacId": this.d_mac_id,
     "ports":{"port1": 80, "port2":554},
     "client":this.client
    }

  
   // console.log(data);

    this.backend.registertunnel(data)
    .subscribe((data)=> { 
     //  console.log("Data:",data);
       this.flag = true;
    });

  }

  live:any;
  liveport:any;
  liveurl:any;

  getliveport(){
    var x = this.gl_mac_id;
    this.backend.getports(x)
    .subscribe((data)=> { 
       // console.log("Data:",data);

       this.live = data["data"];
       this.liveport = data["data"].liveport;
       this.liveurl = data["data"].liveurl;



    });
  }

  copyInputMessage(x) {
    /* Get the text field */
    var copyText = (<HTMLInputElement>document.getElementById(x));
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  






}
