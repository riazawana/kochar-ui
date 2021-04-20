import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';
@Component({
  selector: 'app-energy-meter',
  templateUrl: './energy-meter.component.html',
  styleUrls: ['./energy-meter.component.css']
})
export class EnergyMeterComponent implements OnInit {

  constructor( private backend: BackendconnectionService,
    private route: ActivatedRoute,
    private router: Router) { }

    energylist:any;
  id:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })

      this.backend.getmodbuslocationwise(this.id)
      .subscribe((data)=> { 
          // console.log("Data:",data["data"]);
         this.energylist = data["data"];
        
  
      });

  }

  addenergy(x = this.id){
    this.router.navigate(['/kochar/addenergy',x]);
  }

  openenergy(x){
    // alert(x)
    this.router.navigate(['/kochar/viewenergy',x]);
  }

  delete(x,y){
    this.backend.deletemodbus(x,y)
    .subscribe((data)=> { 
      //  console.log(data);
    });
  }

  edit(x){
    this.router.navigate(['/kochar/editenergymeter',x]);

  }

}
