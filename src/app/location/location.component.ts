import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router) { }
   id:string;
   da:string;
   locations:string;
   faMapMarker = faMapMarkerAlt;
   
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.da = params.get("da");
      })

      
      // if(this.da == "Devices"){
        // this.backend.getlocationdevicewise()
        // .subscribe((data)=> { 
        //    console.log("All location:",data["data"]);
        //    this.locations = data["data"];
        // });

        this.backend.getlocationzonewise(this.id)
        .subscribe((data)=> { 
         //  console.log("All location:",data["data"]);
           this.locations = data["data"];
        });
      // }else{
      //   this.backend.getlocationzonewise(this.id)
      //   .subscribe((data)=> { 
      //      console.log("All location:",data["data"]);
      //      this.locations = data["data"];
      //   });
      // }

    


    



  }

  addlocation(){
    this.router.navigate(['/kochar/addnewlocation',this.id]);
  }

  openlocation(x){
   // alert(x)

    if(this.da == "Devices"){
      this.router.navigate(['/kochar/devicelist',this.id,x]);
    }else{
    this.router.navigate(['/kochar/GatewayList',x]);
    }
  }

}
