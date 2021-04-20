import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-iot-gateway-dash',
  templateUrl: './iot-gateway-dash.component.html',
  styleUrls: ['./iot-gateway-dash.component.css']
})
export class IotGatewayDashComponent implements OnInit {

  constructor(   private router: Router,
    private _location: Location,
    private route:ActivatedRoute) {
     
     }
  topic:string;
  ngOnInit(): void {
    // this.topic = this.route.snapshot.firstChild.url[0].path;
    // console.log(
    //  this.route.snapshot.firstChild.url[0].path
    // )

  }

}

