import { Component, OnInit } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService ,
    private router: Router,
  ) { }

  name:string;
  created_by:string;
  features:any;

  opt = [];

  featuresarr = [];
  roles:any;
  modules:any;
  submodules:any;
  submodule_name:any;
  module_name:any;

  disable = false;

  ngOnInit(): void {
    this.getallfeatures();
    this.getallmodules();
    // this.getallsubmodules();

  }




  getallmodules(){
    this.backend.getallmodules()
    .subscribe((data)=> { 
      //  console.log("Modules:",data["data"]);
       this.modules = data["data"];
    });

  }
  
  submodule:any;

  getallsubmodules(){
    this.backend.getallsubmodules()
    .subscribe((data)=> { 
      //  console.log("submodule:",data["data"]);
       this.submodules = data["data"];
    });

  }

  getsubmodulebyname(x){
    this.backend.getsubmodulebyname(x)
    .subscribe((data)=> { 
      //  console.log("submodule:",data);
       this.submodules = data["data"];

    });
  }

  addfetures(){
    this.router.navigate(["/kochar/addfeatures"]);
  }

  getallfeatures(){
    this.backend.getallfeatures().subscribe((data)=>{
      this.features = data["data"];
      if(this.features.length == 0 ){
        // console.log("datafeatures:",data["data"])
        this.disable =true;
      }else{
        // console.log("datafeatures:",data["data"])
        this.disable =false;

        for(var k = 0; k<this.features.length;k++){
          this.featuresarr.push({"feature_name":this.features[k].name, "type":this.features[k].type, "add": false, "view": false, "delete": false, "edit": false, "action":false});
        }
      }
     

    })
  }
 

  onsubmit(){
    var da = JSON.parse(sessionStorage.getItem('userdata'));
    var role_id = '';
    var role_name = '';
    const data = {
      name:this.name,
      created_by:da["name"]
    }

    this.backend.addrole(data).subscribe((data)=>{
    //  console.log("result:",data)

    //  console.log("final:",this.featuresarr);


      if(data["success"] == true){
        role_id = data["data"][0]._id;
            role_name = data["data"][0].name;
      
          var newmappingdata = {
            role_id : data["data"][0]._id,
            role_name:data["data"][0].name,
            mapping: this.featuresarr,
            created_by:da["name"]
          }

          this.backend.addrole_feature_mapping(newmappingdata).subscribe((resule)=>{  
                // console.log("result:",resule)

                if(resule["success"] == true){

                  var da = JSON.parse(sessionStorage.getItem('userdata'));
    const data = {
      role_name:role_name,
      created_by:da["name"],
      mapping: this.mapping,
      role_id: role_id
    }
    // console.log(data);

    this.backend.addrole_module_mapping(data)
    .subscribe((data)=> { 
      // console.log(data);
      if(data["success"] == true){

      this.router.navigate(["/kochar/Roles"]);
      }
    });

                }
          
          })

      }

    })


  


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

  mapping:any=[];
 
  addmodule(){
    var m;

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

  delete(x){
  this.mapping.splice(x,1);
 }

 
}
