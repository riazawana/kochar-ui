import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-gatways-status',
  templateUrl: './gatways-status.component.html',
  styleUrls: ['./gatways-status.component.css']
})


export class GatwaysStatusComponent implements AfterViewInit {

  

  

  constructor(
    private backend: BackendconnectionService,
    private router: Router
  ) {
  }

  gateways:any;

  ngAfterViewInit() {
    var da = JSON.parse(sessionStorage.getItem('userdata'));


    this.backend.getgatewayuserwise()
    .subscribe((data)=> { 
      // console.log("All gateways:",data["data"]);

       this.gateways = data["data"];
   

    });

   
  }

  

 
}

