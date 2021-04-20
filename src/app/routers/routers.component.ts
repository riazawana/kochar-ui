import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {

  constructor( private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  routerslist:any;
  id:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })

      this.backend.getrouterlocationwise(this.id)
      .subscribe((data)=> { 
          // console.log("Data:",data["data"]);
         this.routerslist = data["data"];
        
  
      });

  }

  addrouter(x = this.id){
    this.router.navigate(['/kochar/addrouter',x]);
  }

  openrouter(x){
    this.router.navigate(['/kochar/openrouter',x]);
  }


  delete(x,y){
    this.backend.deleterouter(x,y)
    .subscribe((data)=> { 
      //  console.log(data);
    });
  }

  edit(x,y){
    this.router.navigate(['/kochar/editrouter',x]);

  }

}
