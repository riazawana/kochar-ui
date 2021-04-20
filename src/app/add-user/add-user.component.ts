import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userformGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private backend: BackendconnectionService 
  ) { }


  name:string;
  email:string;
  mobile:string;
  role_id:string;
  address:string;
  pincode_id:string;
  country_id:string;
  city_id:string;
  state_id:string;
  created_by:string;
  password:string;
  country_list:any;
  state_list:any;
  city_list:any;
  pin_list:any;
  roles:any;
  zone_id:any;

  zones:any;
  zones_arr:any = [];
  zonesid:any;
  rolesarray:any;
  client:any = [];
  

  ngOnInit(): void {
       
    this.userformGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      country_id: ['',[Validators.required]],
      state_id: ['',[Validators.required]],
      city_id: ['',[Validators.required]],
      pincode_id: ['',[Validators.required]],
      role_id: ['',[Validators.required]],
      zone_id: ['',[Validators.required]]
    });

    this.getcountry();
    this.getallroles();
    this.getallzone();

  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  getallzone(){
    this.backend.getallzones()
    .subscribe((data)=> { 
      // console.log("zones:",data["data"]);
       this.zones = data["data"];
    });
  }

  getcountry(){
    

    this.backend.getcountry()
    .subscribe((data)=> { 
       //console.log("Data:",data["data"]);
       this.country_list = data["data"];
    });


  }

  getallroles(){
    
  
    this.backend.getallroles()
    .subscribe((data)=> { 
       //console.log("Data:",data["data"]);
       this.roles = data["data"];
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
       //console.log("Data:",data["data"]);
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

  onchange(x,y){
    this.rolesarray = [];
    if(x == "business"){
      this.role_name = "business";
      var newarray = {
        id:y,
        name:x
      }
      this.rolesarray.push(newarray);
     //console.log(this.rolesarray);

     this.zone_id =["Fincare Central"];
     document.getElementById("zone").style.display = "none";
   }else{
     var newarray = {
       id:y,
       name:x
     }
     this.rolesarray.push(newarray);
     //console.log(this.rolesarray);
     document.getElementById("zone").style.display = "block";
   }
 }

  onsubmit(){

    var da = JSON.parse(sessionStorage.getItem('userdata'));

    if(this.role_name == "business"){
      var c_name = this.name.replace(" ", "_");
      this.client.push(c_name);
      const data = {
        name:this.name,
        email:this.email,
        mobile:this.mobile,
        roles:this.rolesarray,
        address:this.address,
        pincode_id:this.pincode_id,
        country_id:this.country_id,
        state_id:this.state_id,
        created_by:da["name"],
        city_id:this.city_id,
        zones:[],
        client:this.client
      }
  
      //console.log(data);

      this.backend.adduser(data)
      .subscribe((data)=> { 
        //console.log(data);
        //console.log(data["success"]);

        if(data["success"] == true){
        
          var newdata = {
            user_id : data["user_id"],
            name:this.name,
          email:this.email,
          mobile:this.mobile,
          address:this.address,
          pincode_id:this.pincode_id,
          country_id:this.country_id,
          state_id:this.state_id,
          created_by:da["name"],
          city_id:this.city_id,
          roles:this.rolesarray,
          client:this.client


        }

        this.backend.addbusiness(newdata)
      .subscribe((data)=> { 
        //console.log(data);
        this.router.navigate(["/kochar/Users"]);
      })
      }


      });

    }else{

          for(var i = 0; i < this.zone_id.length;i++ )
            {
               var da = this.zone_id[i].split(",");

               this.client.push(da[1]);
               this.zones_arr.push(da[0]);
            }

      const data = {
        name:this.name,
        email:this.email,
        mobile:this.mobile,
        roles:this.rolesarray,
        address:this.address,
        pincode_id:this.pincode_id,
        country_id:this.country_id,
        state_id:this.state_id,
        created_by:da["name"],
        city_id:this.city_id,
        zones:this.zones_arr,
        client:this.client

      }
      //console.log("sumbit data:",data);
  
      this.backend.adduser(data)
      .subscribe((data)=> { 
        //console.log(data);
        this.router.navigate(["/kochar/Users"]);
      });

    }

  }

  role_name:any;



  cancel(){
    this.router.navigate(["/kochar/Users"]);
  }

}
