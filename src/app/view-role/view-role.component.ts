import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  id:any;
  data:any;
  features:any;
  featuresarr = [];
  name:any;
  _id:any;
  role_id:any;

  disable = false;
  
  ngOnInit(): void {

    this.backend.getallfeatures().subscribe((data)=>{
      this.features = data["data"];
      // console.log("datafeatures:",data)
       for(var k = 0; k<this.features.length;k++){
         this.featuresarr.push({"feature_name":this.features[k].name, "type":this.features[k].type, "add": false, "view": false, "delete": false, "edit": false, "action":false});
       }

      
  this.align();
       

    })



  
    } 

    nameid:any;

  align(){
    this.route.paramMap.subscribe(params => {
      this.nameid = params.get("id");
      })
     
      this.backend.getrole(this.nameid)
      .subscribe((data)=> { 
        //  console.log("Data:",data);
         this.data = data["data"][0];
       this.name = this.data.name;
       this._id = this.data.feature_mapping[0]._id;
       this.role_id = this.data.role_id;


         for(var k = 0; k < this.featuresarr.length; k++){
          for(var l = 0; l < this.data.feature_mapping[0].mapping.length; l++){
           if(this.featuresarr[k].feature_name == this.data.feature_mapping[0].mapping[l].feature_name){
            this.featuresarr[k] = this.data.feature_mapping[0].mapping[l];
           }
          }

           
         }

        //  console.log("final:",  this.featuresarr)

        //  alert(this._id);
        //  alert(this.role_id);

      });
  }


  check(a,x,y){



    for(var k = 0; k<this.featuresarr.length;k++){
         
      if(this.featuresarr[k].feature_name == y){

        
                if(a == "add"){
                  this.featuresarr[k].add = x;
                }if(a == "delete"){
                  this.featuresarr[k].delete = x;
                }if(a == "edit"){
                  this.featuresarr[k].edit = x;
                }if(a == "view"){
                  this.featuresarr[k].view = x;
                }if(a == "action"){
                  this.featuresarr[k].action = x;
                }
      }

    }
    



  }

  // update(){
  //   var da = JSON.parse(sessionStorage.getItem('userdata'));
  //   const data = {
  //     _id:this.id,
  //     name:this.name,
  //     created_by:da["name"]
  //   }
  //   console.log(data);

  //   this.backend.updaterole(data).subscribe((data)=>{
  //     console.log("result:",data)
  //     console.log("final:",this.featuresarr);

  //     if(data["success"] == true){
        
  //         var newmappingdata = { 
  //           "data":[{
  //             _id:this._id,
  //           role_id:this.role_id,
  //           mapping: this.featuresarr
  //           }]
  //         }
  //         console.log('update data', newmappingdata);

  //         this.backend.updaterole_feature_mapping(newmappingdata).subscribe((resule)=>{  
  //               console.log("result:",resule)
          
  //         })

  //     }

  //   })
  // }

}


