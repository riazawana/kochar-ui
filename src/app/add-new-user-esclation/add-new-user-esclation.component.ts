import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-add-new-user-esclation',
  templateUrl: './add-new-user-esclation.component.html',
  styleUrls: ['./add-new-user-esclation.component.css']
})
export class AddNewUserEsclationComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService 
  ) { }
  hub:string;
  email:string;
  phone:string;
  name:string;
  notification_category:any;
  location_id:string;
  gateway_id:string;
  level:string;
  designation:string;
  tat:string;
  created_by:string;
  locations:any;
  hub_list:any;
  level_list = [1,2,3,4,5,6,7,8,9,10];
  user_list:any;

  ngOnInit(): void {
   // console.log(sessionStorage.getItem('userdata'));
   // console.log(sessionStorage.getItem('token'));
    
    var da = JSON.parse(sessionStorage.getItem('userdata'));

    this.backend.getlocationuserwise()
    .subscribe((data)=> { 
     // console.log(data);
      this.locations = data["data"][0].locations;
    })

   

  }

  gethub(x){

    this.backend.getgatewaylocationwise(x)
    .subscribe((data)=> { 
      //console.log(data);
      this.hub_list = data["data"];
    })

  }

 



  onsubmit(){
  


    //console.log(this.array);

    this.backend.addescalationmatrix(this.array)
    .subscribe((data)=> { 
      //console.log(data);
    })

    }

    array:any = {
      data:[]
    };

    client:any;

    add(){

      var da = JSON.parse(sessionStorage.getItem('userdata'));
      var h = this.hub.split(",");
      var la = this.location_id.split(",");
      this.client =  la[2];

    var newadd =
        {
      email:this.email,
      phone:this.phone,
      name:this.name,
      notification_category:this.notification_category,
      location_id:la[0],
      location_name:la[1],
      gateway_id: h[2],
      level:this.level,
      designation:this.designation,
      tat:this.tat,
      created_by:da["name"],
      client:this.client,
      device_type:[
        {
          "type": "iot_gateway",
          "mac_id": h[1],
          "gateway_name": h[0]
        }
      ]
        }

        this.array.data.push(newadd);

        this.name = "";
        this.email = "";
        this.phone = "";
        this.designation = "";
        this.tat = "";

      

    }

  }




