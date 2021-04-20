import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-videogateway',
  templateUrl: './videogateway.component.html',
  styleUrls: ['./videogateway.component.css']
})
export class VideogatewayComponent implements OnInit {

  constructor( private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router: Router) { }

    videolist:any;
  id:any;
  idz:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.idz = params.get("idz");

      })

      this.backend.getallvideogateways()
      .subscribe((data)=> { 
          // console.log("Data:",data["data"]);
         this.videolist = data["data"];
        
  
      });

  }

  addvideo(x = this.id){
    this.router.navigate(['/kochar/addvideogateway',x]);
  this.router.navigate(['/kochar/addvideogateway',this.idz,this.id]);

  }

  openvideo(x){
     this.router.navigate(['/kochar/viewvideo',x]);
  }


  // delete(x,y){
  //   this.backend.deleterouter(x,y)
  //   .subscribe((data)=> { 
  //     //  console.log(data);
  //   });
  // }

  // edit(x,y){
  //   this.router.navigate(['/kochar/editrouter',x]);

  // }

}
