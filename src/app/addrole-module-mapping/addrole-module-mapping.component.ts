import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';

@Component({
  selector: 'app-addrole-module-mapping',
  templateUrl: './addrole-module-mapping.component.html',
  styleUrls: ['./addrole-module-mapping.component.css']
})
export class AddroleModuleMappingComponent implements OnInit {

  constructor(
    private backend: BackendconnectionService 
  ) { }


  
  role_id:any;
  role:any;
  created_by:string;
  roles:any;
  modules:any;
  submodules:any;
  role_name:any;



  ngOnInit(): void {
    this.getallroles();
    this.getallmodules();
    this.getallsubmodules();
  }
 


  getallroles(){
    
    this.backend.getallroles()
    .subscribe((data)=> { 
      // console.log("Data:",data["data"]);
       this.roles = data["data"];
    });


  }


  getallmodules(){
    this.backend.getallmodules()
    .subscribe((data)=> { 
       //console.log("Data:",data["data"]);
       this.modules = data["data"];
    });

  }
  
  submodule:any;

  getallsubmodules(){
    this.backend.getallsubmodules()
    .subscribe((data)=> { 
       //console.log("submodule:",data["data"]);
       this.submodules = data["data"];
    });

  }

  getsubmodulebyname(x){
    this.backend.getsubmodulebyname(x)
    .subscribe((data)=> { 
       //console.log("submodule:",data["data"]);
    });
  }
 
  mapping:any = [];
  module_name:any;
  submodule_name_arr:any;

  add(){
      var r = this.role.split(",");
      this.role_id = r[0];
      this.role_name = r[1];
      var m;


      if(this.submodule_name_arr != undefined){
       var s_m_n = this.submodule_name_arr.split(",");
       var new_smn_arr = [];
      for(var k = 0; k < s_m_n.length; k++){
        var newm = {
          "submodule_name":s_m_n[k]
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
      //console.log(this.mapping)
  }
 

  onsubmit(){
  
    this.getsubmodulebyname(this.module_name);
  
    // const data = {
    //   role_id: this.role_id,
    //   role_name: this.role_name,
    //   mapping: this.mapping,
    //   created_by: 'amit',
    // }
    // console.log(data);

    // this.backend.addrole_module_mapping(data)
    // .subscribe((data)=> { 
    //   console.log(data);
    // });

  }

}
