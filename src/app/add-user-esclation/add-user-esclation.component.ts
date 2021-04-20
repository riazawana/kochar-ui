import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-add-user-esclation',
  templateUrl: './add-user-esclation.component.html',
  styleUrls: ['./add-user-esclation.component.css']
})
export class AddUserEsclationComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService 
  ) { }
  hub:string;
  sensor:string;
  email:string;
  mobile:string;
  name:string;
  notification_category:any;
  location_id:string;
  gateway_id:string;
  level:string;
  designation:string;
  tat:string;
  created_by:string;
 
  

  ngOnInit(): void {

  }

 


  onsubmit(){


    }

  }




