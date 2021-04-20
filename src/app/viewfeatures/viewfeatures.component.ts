import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewfeatures',
  templateUrl: './viewfeatures.component.html',
  styleUrls: ['./viewfeatures.component.css']
})
export class ViewfeaturesComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:any;
  name:any;
  type:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      //alert(this.id)
      })
     
    this.backend.getfeatures(this.id)
    .subscribe((data)=> { 
      // console.log("User Data",data);
       this.name = data["data"][0].name;
       this.type = data["data"][0].type;

    });
    

  }

}
