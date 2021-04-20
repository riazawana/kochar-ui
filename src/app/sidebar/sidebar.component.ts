import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
   closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }

}







