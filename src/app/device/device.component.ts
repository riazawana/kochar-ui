import {OnInit, Component, ViewChild} from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

import { faPodcast,faServer,faWifi,faWindowMinimize } from '@fortawesome/free-solid-svg-icons';




export interface UserData {
  sr_no: string;
  zone: string;
  location: string;
  device:any;
}



@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

  

    export class DeviceComponent implements OnInit {

      faPodcast = faPodcast;
      faServer = faServer;
      faWifi =  faWifi;
      faWindowMinimize = faWindowMinimize;

      constructor( 
        private backend: BackendconnectionService,
        private router: Router,
        private route: ActivatedRoute) { }
        
     id:any;
     idz:any;

     add:boolean = false;
     view:boolean = false;
     delete:boolean = false;
     edit:boolean = false;

      ngOnInit(): void {

        var features = JSON.parse(sessionStorage.getItem('features'));
        for(var i = 0; i < features.length; i++){
          if(features[i].feature_name == 'Devices'){
             if(features[i].add == true){
            this.add = true;
             }
             if(features[i].view == true){
              this.view = true;
               }
               if(features[i].edit == true){
                this.edit = true;
                 }if(features[i].delete == true){
                  this.delete = true;
                   }
    
          } 
        }

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.idz = params.get("idz");

      })

    this.backend.getallusers()
    .subscribe((data)=> { 
      // console.log("All Users:",data['data']);
     
    });

   
  }

  opendevice(x,y = this.id ){
   // alert(x);
   // alert(y);
    this.router.navigate(['/kochar/'+x,this.idz,y]);

  }

  
  
}

