import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

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

  disable = true;
  
  ngOnInit(): void {

      this.backend.getallfeatures().subscribe((data)=>{
      this.features = data["data"];
     // console.log("datafeatures:",data)
       for(var k = 0; k<this.features.length;k++){
         this.featuresarr.push({"feature_name":this.features[k].name, "type":this.features[k].type, "add": false, "view": false, "delete": false, "edit": false, "action":false});
       }
      this.align();
    })


    this.getallmodules();
    // this.getallsubmodules();
  
    } 

    modules:any;
    submodules:any;
    mapping:any;
    mappdata:any;

    getallmodules(){
      this.backend.getallmodules()
      .subscribe((data)=> { 
        //  console.log("Modules:",data["data"]);
         this.modules = data["data"];
      });
  
    }
    
    submodule:any;
    submodule_name:any;
    module_name:any;

  
  
    getallsubmodules(){
      this.backend.getallsubmodules()
      .subscribe((data)=> { 
        //  console.log("submodule:",data["data"]);
         this.submodules = data["data"];
      });
  
    }
  

    getsubmodulebyname(x){
      //alert(x)
      this.backend.getsubmodulebyname(x)
      .subscribe((data)=> { 
        //  console.log("submodule:",data);
         this.submodules = data["data"];
  
      });
    }

    addmodule(){
      var m;
  
  // alert(this.submodule_name);
  // console.log(this.submodule_name)
      if(this.submodule_name != undefined){
     
       var new_smn_arr = [];
      for(var k = 0; k < this.submodule_name.length; k++){
        var newm = {
          "submodule_name":this.submodule_name[k]
        }
        new_smn_arr.push(newm);
      }
        
      m = {
        "submodulemapping": true,
        "submodulename": new_smn_arr,
        "modulename": this.module_name
      }
    }else{
      m = {
        "submodulemapping": false,
        "submodulename": [],
        "modulename": this.module_name
      }
    }
   
    this.mapping.push(m);
  
          this.submodule_name = undefined;
          this.module_name = '';
  
  
  
    }

  align(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
     
      this.backend.getrole(this.id)
      .subscribe((data)=> { 
        //  console.log("Data:",data["data"]);
         this.data = data["data"][0];
       this.name = this.data.name;
       this._id = this.data.feature_mapping[0]._id;
       this.role_id = this.data.feature_mapping[0].role_id;


         for(var k = 0; k < this.featuresarr.length; k++){
          for(var l = 0; l < this.data.feature_mapping[0].mapping.length; l++){
           if(this.featuresarr[k].feature_name == this.data.feature_mapping[0].mapping[l].feature_name){
            this.featuresarr[k] = this.data.feature_mapping[0].mapping[l];
           }
          }

           
         }

         this.backend.getrole_module_mappingbyname(this.name).subscribe((data)=>{
        //  console.log("datarolemodulemap:",data)

         this.mapping = data["data"][0].mapping;
         this.m_id = data["data"][0]._id;
         this.mrole_id = data["data"][0].role_id;

        })

      });

      
  }
  mrole_id:any;
  m_id:any;
  delete(x){
    

 this.mapping.splice(x,1);

 


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

  update(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));
    
        
          var newmappingdata = { 
            "data":[{
              _id : this._id,
              mapping: this.featuresarr
            }]
          }

        var newmappingdataofmodule = {
		"_id": this.m_id,
		"role_id": this.mrole_id,
		"role_name":this.name,
		"mapping":this.mapping,
		"modified_by":da["name"]
        }

          //console.log('update data', newmappingdata);

          this.backend.updaterole_feature_mapping(newmappingdata).subscribe((resule)=>{  
            //    console.log("result:",resule);
                if(resule["success"] == true){


                //  console.log(newmappingdataofmodule);
                 
                 this.backend.updaterole_module_mapping(newmappingdataofmodule).subscribe((res)=>{  
                // console.log(res)
                if(res["success"] == true){
                 this.router.navigate(["/kochar/Roles"]);
                }
                
                })
              }
          
          })

      // }

    // })
  }




}


