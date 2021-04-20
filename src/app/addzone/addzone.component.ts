import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addzone',
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.css']
})

export class AddzoneComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  name:string;
  created_by:string;
  user_id:string;
  business_user = [];
  userdata:any;

  ngOnInit(): void {

    this.backend.getallusers()
    .subscribe((data)=> { 

     //  console.log("All Users:",data['data']);
       this.userdata = JSON.parse(sessionStorage.getItem('userdata'));

       //console.log('userdaata',this.userdata);
       
       for(var k = 0; k< data['data'].length; k++){
         
        if(data['data'][k].roles[0].name == "business"){
          this.business_user.push(data['data'][k])
        }
        
       }
    })

  }


 

  onsubmit(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));

    var id = this.user_id.split(",");

    const data = {
      name:this.name,
      created_by:da["name"],
      user_id: id[0],
      keycloak_user_id:id[1],
      client:id[2]
      
    }
    //console.log(data);

    this.backend.addzone(data).subscribe((resule)=>{  
      //console.log("result:",resule)

      if(resule["success"] == true){
        this.router.navigate(["/kochar/Zones"]);
       }

    })

  }


}
