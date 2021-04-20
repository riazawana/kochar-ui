import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-zone',
  templateUrl: './view-zone.component.html',
  styleUrls: ['./view-zone.component.css']
})
export class ViewZoneComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  //name:string;
  created_by:string;
  //user_id:string;
  business_user = [];

  public isDisabled = true;

  id:string;
  zone:any;
  name:string;
  user_id:string;
  
  
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })

      this.backend.getallusers()
      .subscribe((data)=> { 
  
        // console.log("All Users:",data["data"]);
  
         
         
         for(var k = 0; k<data["data"].length; k++){
           
          if(data["data"][k].roles[0].name == "business"){

            this.business_user.push(data["data"][k])
          }
          
         }
      })



     // console.log( this.business_user)
      this.backend.getZone(this.id)
    .subscribe((data)=> { 
      // console.log("Zone data Rj Data",data["data"][0]);
       //this.zone = data[0].data[0];
       this.zone = data["data"][0];     
       this.name = this.zone.name;
       this.user_id = this.zone.user_id;

      });
      

  }

  

}
