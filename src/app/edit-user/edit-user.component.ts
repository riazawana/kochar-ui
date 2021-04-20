import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edituserformGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:string; 
  user:any;
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
  role_name:any;
  zones:any;
  zonesname:any;
  keycloak:any;

  getallzone(){
    this.backend.getallzones()
    .subscribe((data)=> { 
      // console.log("zones:",data["data"]);
       this.zones = data["data"];
    });
  }
  getallroles(){
    
    // alert("allusers")
    this.backend.getallroles()
    .subscribe((data)=> { 
      // console.log("Data:",data["data"]);
       this.roles = data["data"];
    });


  }
  getcountry(){
    

    this.backend.getcountry()
    .subscribe((data)=> { 
     //  console.log("Data:",data["data"]);
       this.country_list = data["data"];
    });


  }

  ngOnInit(): void {
    
    this.edituserformGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      country_id: ['',[Validators.required]],
      state_id: ['',[Validators.required]],
      city_id: ['',[Validators.required]],
      pincode_id: ['',[Validators.required]],
      role_id: ['',[Validators.required]],
      zonesname: ['',[Validators.required]]
    });

    this.getcountry();
    this.getallroles();
    this.getallzone();
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
     
    this.backend.getSingleUser(this.id)
    .subscribe((data)=> { 
      // console.log("User Data for edit",data);
      this.user = data['data'][0];
      this.name = this.user.name;
       this.mobile = this.user.mobile;
       this.email = this.user.email;
       this.address = this.user.address;
       this.country_id = this.user.country_id;
       this.state_id = this.user.state_id;
       this.city_id = this.user.city_id;
       this.pincode_id = this.user.pincode_id;
       this.role_id = this.user.roles[0].name;
       this.rolesarray = this.user.roles;
       this.zonesname = this.user.zones;
        this.keycloak = this.user.keycloak_user_id;
        // this.client = this.user.client;



       this.getcity(this.state_id);
       this.getpin(this.state_id, this.city_id);
       this.getstate(this.country_id);
    });
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 
  getstate(x){
    
   this.backend.getstate(x)
   .subscribe((data)=> { 
     // console.log("Data:",data["data"]);
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
     // console.log("Data:",data["data"]);
      this.pin_list = data["data"];
   });
 }





 onchange(x,y){
  this.rolesarray = [];
  if(x == "business"){
    this.role_name = "business";
    var newarray = {
      id:y,
      name:x
    }
    this.rolesarray.push(newarray);
  // console.log(this.rolesarray);

   this.zonesname =this.zonesname;
   document.getElementById("zone").style.display = "none";
 }else{
   var newarray = {
     id:y,
     name:x
   }
   this.rolesarray.push(newarray);
  // console.log(this.rolesarray);
   document.getElementById("zone").style.display = "block";
 }
}


rolesarray:any;
client:any=[];
zones_arr:any=[];
mod_name:any;

 onsubmit(){
  var da = JSON.parse(sessionStorage.getItem('userdata'));
 this.mod_name = da.name;
    // alert(this.zonesname);

    // console.log(this.zonesname);

    this.client = [];

     for(var i = 0; i < this.zonesname.length; i++ ){
         this.backend.getzoneinfobyname(this.zonesname[i])
         .subscribe((data)=> { 
          //  console.log(data["data"][0])
           var c = data["data"][0].client;
           this.client.push(c);
         });

     }

     
     this.zones_arr = this.zonesname;




 var data = {
    "zones": this.zones_arr,
    "roles": this.rolesarray,
    "client":this.client,
    "name": this.name,
    "mobile": this.mobile,
    "address": this.address,
    "pincode_id": this.pincode_id,
    "country_id": this.country_id,
    "city_id": this.city_id,
    "state_id": this.state_id,
    "keycloak_user_id": this.keycloak,
    "modified_by" : this.mod_name
}

// console.log(data)
this.backend.updateuser(data)
.subscribe((data)=> { 
  //  console.log("Data:",data["data"]);
   this.city_list = data["data"];

   if(data["success"] == true){
    this.router.navigate(["/kochar/Users"]);
   }
});

}

cancel(){
  this.router.navigate(["/kochar/Users"]);
}
}
