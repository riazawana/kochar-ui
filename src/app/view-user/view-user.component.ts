import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:string;
  user:any;

  public isDisabled = true;
  name:string = "";
  mobile:string = "";
  email:string = "";
  address:string = "";
  country_id:string = "";
  city_id:string = "";
  state_id:string = "";
  pincode_id:string = "";
  role_id:string = "";
  country_list:any;
  state_list:any;
  city_list:any;
  pin_list:any;
  roles:any;
  zone_id:any;
  user_id:any;

  zones:any;
  zonesid:any;
  getallzone(){
    this.backend.getallzones()
    .subscribe((data)=> { 
      // console.log("zones:",data["data"]);
       this.zones = data["data"];
    });
  }
  getallroles(){
    
    this.backend.getallroles()
    .subscribe((data)=> { 
      // console.log("roles:",data["data"]);
       this.roles = data["data"];
    });


  }
  ngOnInit(): void {
    this.getallroles();
    this.getcountry();   
    this.getallzone();
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
     
    this.backend.getSingleUser(this.id)
    .subscribe((data)=> { 
      // console.log("User Data",data);
       this.user = data['data'][0];

       this.name = this.user.name;
       this.mobile = this.user.mobile;
       this.email = this.user.email;
       this.address = this.user.address;
       this.country_id = this.user.country_id;
       this.state_id = this.user.state_id;
       this.city_id = this.user.city_id;
       this.pincode_id = this.user.pincode_id;
       this.role_id = this.user.roles[0].id;
       this.zone_id = this.user.zones;
       this.user_id = this.user.user_id;
       

       this.getcity(this.state_id);
    this.getpin(this.state_id, this.city_id);
    this.getstate(this.country_id);
    

    });
    

  }

  getcountry(){
    

    this.backend.getcountry()
    .subscribe((data)=> { 
      // console.log("Data:",data["data"]);
       this.country_list = data["data"];
    });


  }
  getstate(x){
   this.backend.getstate(x)
   .subscribe((data)=> { 
      //console.log("Data:",data["data"]);
      this.state_list = data["data"];
   });

 }

 getcity(x){
   this.backend.getcity(x)
   .subscribe((data)=> { 
     // console.log("Data:",data["data"]);
      this.city_list = data["data"];
   });
 }

 getpin(x,y){
   this.backend.getpin(x,y)
   .subscribe((data)=> { 
      //console.log("Data:",data["data"]);
      this.pin_list = data["data"];
   });
 }

  
  

  

}


