import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewrolemodulemapping',
  templateUrl: './viewrolemodulemapping.component.html',
  styleUrls: ['./viewrolemodulemapping.component.css']
})
export class ViewrolemodulemappingComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:any;
  data:any = 0;
  
  view = false;
  role_name:any;

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
     
      this.backend.getrole_module_mapping(this.id)
      .subscribe((data)=> {
        // console.log(data);
        this.data = data["data"][0];
        this.role_name = this.data.role_name;
       })

  
    } 

}


