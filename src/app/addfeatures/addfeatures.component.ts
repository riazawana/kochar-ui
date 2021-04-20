import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-addfeatures',
  templateUrl: './addfeatures.component.html',
  styleUrls: ['./addfeatures.component.css']
})
export class AddfeaturesComponent implements OnInit {

  userformGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private backend: BackendconnectionService 
  ) { }


 name:any;
 type:any;
 status:any;
 created_by:any;


  ngOnInit(): void {
       
    this.userformGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      type: ['', [Validators.required]],
    });

  }




  onsubmit(){

    var da = JSON.parse(sessionStorage.getItem('userdata'));

      const data = {
        name:this.name,
        type:this.type,
        created_by:da["name"]
      }
     // console.log(data);
      this.backend.addfeature(data).subscribe((data)=> { 
      //  console.log(data);
        if(data["success"] == true){
          this.router.navigate(["/kochar/Features"]);
         }
      });
      
  }

 

  cancel(){
    this.router.navigate(["/kochar/Users"]);
  }

  addsubmodule(){
    this.router.navigate(["/kochar/addsubmodule"]);
  }

}
