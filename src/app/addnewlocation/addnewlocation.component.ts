import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addnewlocation',
  templateUrl: './addnewlocation.component.html',
  styleUrls: ['./addnewlocation.component.css']
})
export class AddnewlocationComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }

  country_list:any;
  state_list:any;
  city_list:any;
  pin_list:any;
  gateway_id:string = "0";
  zone_name:any;

  // location 
  lo_name:string;
  site:string;
  add:string;
  country_id:string;
  state_id:string;
  city_id:string;
  pincode_id:string;
  site_live:boolean;

 
  location_id:string = "0";
  // controller

 

  //port



  zone_id:string;
  client:string;


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.zone_id = params.get("id");
      })

      this.backend.getZone(this.zone_id)
      .subscribe((data)=> { 
         // console.log("Zone data:",data);
          this.zone_name = data["data"][0].name;
          this.client = data["data"][0].client;
      });
  
      this.getcountry();
    
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

  
  

  getcountry(){
    

    this.backend.getcountry()
    .subscribe((data)=> { 
      //  console.log("Data:",data["data"]);
       this.country_list = data["data"];
    });


  }



  getstate(x){
    this.backend.getstate(x)
    .subscribe((data)=> { 
      //  console.log("Data:",data["data"]);
       this.state_list = data["data"];
    });

  }

  getcity(x){
    this.backend.getcity(x)
    .subscribe((data)=> { 
      //  console.log("Data:",data["data"]);
       this.city_list = data["data"];
    });
  }

  getpin(x,y){
    this.backend.getpin(x,y)
    .subscribe((data)=> { 
      //  console.log("Data:",data["data"]);
       this.pin_list = data["data"];
    });
  }

  

  submit_location(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));

   var data = {
      name: this.lo_name,
      address: this.add,
      zone_id: this.zone_id,
      location_type: this.site,
      site_live: true,
      pincode_id: this.pincode_id,
      country_id:this.country_id,
      city_id: this.city_id,
      state_id: this.state_id,
      created_by: da["name"],
      zone_name:this.zone_name,
      client:this.client
    }

   

    //console.log("data:",data);

    this.backend.addlocation(data)
    .subscribe((data)=> { 
      // console.log("Data:",data);
       this.location_id = data["location_id"];
    });

  }

  




}

