import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackendconnectionService {

  constructor(private httpClient : HttpClient,
    private router: Router,
    ) { }

     
  api = "http://202.164.38.204:3003";

  headers_object:any;
  httpOptions:any;

 auth(){
  var t = sessionStorage.getItem('token');
  this.headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+t
  });

      this.httpOptions = {
        headers: this.headers_object
      };
 }


 cam_list : any = [];

  
 healthDashboard()
  {
    this.auth();
    return this.httpClient.get(' http://202.164.38.204:3003/healthDashboard',this.httpOptions);
  }
   getModulesAgainstRole(){
    this.auth();
    return this.httpClient.get(' http://202.164.38.204:3003/getModulesAgainstRole',this.httpOptions);
  }

  getallusers(){
    this.auth();
    return this.httpClient.get(this.api+'/getallusers',this.httpOptions);
  }

  getallmodules(){
    this.auth();
    return this.httpClient.get(this.api+'/getallmodules',  this.httpOptions);
  }

  getallroles(){
    this.auth();
    return this.httpClient.get(this.api+'/getallroles',this.httpOptions);
  }


  getcountry(){
    this.auth();
    return this.httpClient.get(this.api+'/getcountries',this.httpOptions);
  }

  getcity(x){
    this.auth();
    return this.httpClient.get(this.api+'/getcities?state_id='+x,this.httpOptions);
  }


  getstate(x){
    this.auth();
    return this.httpClient.get(this.api+'/getstates?country_id='+x,this.httpOptions);
  }

  getpin(x,y){
    this.auth();
    return this.httpClient.get(this.api+'/getpincodes?state_id='+x+'&city_id='+y,this.httpOptions);
  }

  

  login(data){
    this.auth();
   return this.httpClient.post('api',data,this.httpOptions);
  }

  adduser(data){
    this.auth();
    return this.httpClient.post(this.api+'/adduser',data,this.httpOptions);
  }

  addrole(data){
    this.auth();
    return this.httpClient.post(this.api+'/addrole',data,this.httpOptions);
  }

  addmodule(data){
    this.auth();
    return this.httpClient.post(this.api+'/addmodule',data,this.httpOptions);
  }

  addrole_module_mapping(data){
    this.auth();
    return this.httpClient.post(this.api+'/addrole_module_mapping',data,this.httpOptions);
  }

  addrole_feature_mapping(data){
    this.auth();
    return this.httpClient.post(this.api+'/addrole_feature_mapping',data,this.httpOptions);
  }

  addzone(data){
    this.auth();
    return this.httpClient.post(this.api+'/addzone',data,this.httpOptions);
  }

  
  addbusiness(data){
    this.auth();
    return this.httpClient.post(this.api+'/addbusiness',data,this.httpOptions);
  }

  addlocation(data){
    this.auth();
    return this.httpClient.post(this.api+'/addlocation',data,this.httpOptions);

  }

  
  addiotgateway(data){
    this.auth();
    return this.httpClient.post(this.api+'/addiotgateway',data,this.httpOptions);

  }

  adddevice(data){
    this.auth();
    return this.httpClient.post(this.api+'/adddevice',data,this.httpOptions);

  }

  addtemplate(data){
    this.auth();
    return this.httpClient.post(this.api+'/addtemplate',data,this.httpOptions);

  }

  gettemplate(x){
    this.auth();
    return this.httpClient.get(this.api+'/gettemplate?_id='+x,this.httpOptions);

  }


  getallrole_module_mappings(){
    this.auth();
    return this.httpClient.get(this.api+'/getallrole_module_mappings',this.httpOptions);
  }

  

  getallfeatures(){
    this.auth();
    return this.httpClient.get(this.api+'/getallfeatures',this.httpOptions);
  }

  getfeatures(x){
    this.auth();
    return this.httpClient.get(this.api+'/getfeature?_id='+x,this.httpOptions);
  }


  

  deletefeature(x){
    this.auth();
    return this.httpClient.delete(this.api+'/deletefeature?_id='+x,this.httpOptions);
  
  }

  addfeature(data){
    this.auth();
    return this.httpClient.post(this.api+'/addfeature',data,this.httpOptions);
  
  }

  getallzones(){
    this.auth();
    return this.httpClient.get(this.api+'/getzoneuserwise',this.httpOptions);
  }

  getalltemplate(){
    this.auth();
    return this.httpClient.get(this.api+'/getalltemplate',this.httpOptions);
  }

  getalllocation(){
    this.auth();
    return this.httpClient.get(this.api+'/getalllocation',this.httpOptions);
  }

  getlocationzonewise(zone_id){
    this.auth();
    return this.httpClient.get(this.api+'/getlocationzonewise?zone_id='+zone_id,this.httpOptions);
  }

  getlocationdevicewise(){
      this.auth();
      return this.httpClient.get(this.api+'/getlocationdevicewise',this.httpOptions);
    
  }

  getlocation(id){
    this.auth();
    return this.httpClient.get(this.api+'/getlocation?_id='+id,this.httpOptions);
  }

  getallnotifications(){
    this.auth();
    return this.httpClient.get(this.api+'/getallnotifications',this.httpOptions);
  }

  getnotification(id,cli){
    this.auth();
    return this.httpClient.get(this.api+'/getnotification?_id='+id+'&client='+cli,this.httpOptions);
  }



  getgatewaylocationwise(location_id){
    this.auth();
    return this.httpClient.get(this.api+'/getgatewaylocationwise?location_id='+location_id,this.httpOptions);
  }


  getall_role_feature_mapping(){
    this.auth();
    return this.httpClient.get(this.api+'/getallrole_feature_mappings',this.httpOptions);
  }

  getzoneuserwise(){
    this.auth();
    return this.httpClient.get(this.api+'/getzoneuserwise',this.httpOptions);
  }

  getgatewayuserwise(){
    this.auth();
    return this.httpClient.get(this.api+'/getgatewayuserwise',this.httpOptions);
  }

  getescalationmatrixuserwise(){
    this.auth();
    return this.httpClient.get(this.api+'/getescalationmatrixuserwise',this.httpOptions);
  }

  getlocationuserwise(){
    this.auth();
    return this.httpClient.get(this.api+'/getlocationuserwise',this.httpOptions);
  }

  addescalationmatrix(data){
    this.auth();
    return this.httpClient.post(this.api+'/addescalationmatrix',data,this.httpOptions);
  }

  getescalationmatrix(id,m_id,name){

  this.auth();
  alert(id);
    return this.httpClient.get(this.api+'/getescalationmatrix?location_id='+id+'&mac_id='+m_id+'&gateway_name='+name,this.httpOptions);
  }

 
  getnotificationsettings(id){
    this.auth();
      return this.httpClient.get(this.api+'/getnotificationsettings?gateway_id='+id,this.httpOptions);
    }


    updatenotificationsettings(data){
      this.auth();
    return this.httpClient.post(this.api+'/updatenotificationsettings',data,this.httpOptions);
    }

    addsmssetting(data){
      this.auth();
    return this.httpClient.post(this.api+'/addsmssetting',data,this.httpOptions);
    }

    updatenotification(data){
      this.auth();
      return this.httpClient.post(this.api+'/updatenotification',data,this.httpOptions);
      
    }
    updatedevice(data){
      this.auth();
      return this.httpClient.post(this.api+'/updatedevice',data,this.httpOptions);
      
    }
   
    getsmssetting(id){
      this.auth();
        return this.httpClient.get(this.api+'/getsmssetting?gateway_id='+id,this.httpOptions);
      }


      getNotificationCount(){
        this.auth();
        return this.httpClient.get(this.api+'/getNotificationCount?status=false',this.httpOptions);
      
      }

      getrole_module_mapping(id){
        this.auth();
          return this.httpClient.get(this.api+'/getrole_module_mapping?_id='+id,this.httpOptions);
        }



      deleteuser(x){
        this.auth();
        return this.httpClient.delete(this.api+'/deleteuser?keycloak_user_id='+x,this.httpOptions);
      
      }


      deletezone(x){
        this.auth();
        return this.httpClient.delete(this.api+'/deletezone?_id='+x,this.httpOptions);
      
      }


      deletetemplate(x){
        this.auth();
        return this.httpClient.delete(this.api+'/deletetemplate?_id='+x,this.httpOptions);
      
      }


      deleteiotgateway(x,y){
        this.auth();
        return this.httpClient.delete(this.api+'/deleteiotgateway?mac_id='+x+'&client='+y,this.httpOptions);
      
      }

      deleterole_module_mapping(x){
        this.auth();
        return this.httpClient.delete(this.api+'/deleterole_module_mapping?_id='+x,this.httpOptions);
      
      }


      getrouteruserwise(){
        this.auth();
        return this.httpClient.get(this.api+'/getrouteruserwise',this.httpOptions);
      
      }

      
      addrouter(data){
        this.auth();
      return this.httpClient.post(this.api+'/addrouter',data,this.httpOptions);
      }


      updaterouter(data){
        this.auth();
      return this.httpClient.post(this.api+'/updaterouter',data,this.httpOptions);
      }

      getrouter(x){
        this.auth();
        return this.httpClient.get(this.api+'/getrouter?_id='+x,this.httpOptions);
      
      }

      getroutermac(x){
        this.auth();
        return this.httpClient.get(this.api+'/getrouter?mac_id='+x,this.httpOptions);
      
      }

      deleterouter(x,y){
        this.auth();
        return this.httpClient.delete(this.api+'/deleterouter?mac_id='+x+'&client='+y,this.httpOptions);
      
      }

      deletemodbus(x,y){
        this.auth();
        return this.httpClient.delete(this.api+'/deletemodbus?mac_id='+x+'&client='+y,this.httpOptions);
      
      }

      

      getsubmodulebyname(name){
        this.auth();
        return this.httpClient.get(this.api+'/getsubmodule?modulename='+name,this.httpOptions);
      }
   
        getSingleUser(user_id){
            this.auth();
            return this.httpClient.get(this.api+'/getuser?_id='+user_id,this.httpOptions);
          }
      
         getZone(zone_id){
            this.auth();
            return this.httpClient.get(this.api+'/getzone?_id='+zone_id,this.httpOptions);
          }
    
          getTemplate(temp_id){
            this.auth();
            return this.httpClient.get(this.api+'/gettemplate?_id='+temp_id,this.httpOptions);
          }
    
          registertunnel(data){
            this.auth();
            return this.httpClient.post(this.api+'/registertunnel',data,this.httpOptions); 
          }

         

          getports(gl_mac_id){
            this.auth();
            return this.httpClient.get(this.api+'/getports?gl_mac_id='+gl_mac_id,this.httpOptions);
          }
    
    
          executeshellcommand(data){
            this.auth();
            return this.httpClient.post(this.api+'/executeshellcommand',data,this.httpOptions); 
          }

          routerfirmwareupdate(x){
            this.auth();
            return this.httpClient.get(this.api+'/routerfirmwareupdate?gl_mac_id='+x,this.httpOptions); 
          }

          deleterole(x){
            this.auth();
            return this.httpClient.delete(this.api+'/deleterole?name='+x,this.httpOptions);
          
          }
    
          addsubmodule(data){
            this.auth();
            return this.httpClient.post(this.api+'/addsubmodule',data,this.httpOptions);
          }

          addvideogateways(data){
            this.auth();
            return this.httpClient.post(this.api+'/addvideogateways',data,this.httpOptions);
          }

          getrole_module_mappingbyname(x){
            this.auth();
            return this.httpClient.get(this.api+'/getrole_module_mapping?role_name='+x,this.httpOptions);
          }

          updaterole_module_mapping(data){
            this.auth();
            return this.httpClient.post(this.api+'/updaterole_module_mapping',data,this.httpOptions);
          }

          getzoneinfobyname(data){
            this.auth();
            return this.httpClient.get(this.api+'/getzoneinfobyname/'+data,this.httpOptions);
          }

          sendCommandToStartRtspProcessing(data){
            this.auth();
            return this.httpClient.post('https://localhost:9999/start-camera',data,this.httpOptions);
          }


          camera_list(){
            this.auth();
            return this.httpClient.get('https://localhost:9999/camera-list',this.httpOptions);
          }

          check_status(data){
            this.auth();
            return this.httpClient.get('https://localhost:9999/check-status/'+data,this.httpOptions);
          }


          resources_usage(){
            this.auth();
            return this.httpClient.get('https://localhost:9999/resources-usage',this.httpOptions);
          }


          stop_camera(data){
            this.auth();
            return this.httpClient.get('https://localhost:9999/stop-camera/'+data,this.httpOptions);
          }
         

          startRTSPDownloading(data){
            this.auth();
            return this.httpClient.post('https://localhost:9999/download-video',data,this.httpOptions);
          }

          footageretention(x,y){
            this.auth();
            return this.httpClient.get(this.api+'/footageretention?mac_id='+x+'&camera_id='+y,this.httpOptions);
          }

          recordedVideos(x,y,z,e){
            this.auth();
            return this.httpClient.get(this.api+'/recordedVideos?mac_id='+x+'&start_time='+y+'&end_time='+z+'&camera_id='+e,this.httpOptions);
          }

          getclientzone(x){
            this.auth();
            return this.httpClient.get(this.api+'/getclientzone?client_name='+x,this.httpOptions);
          }

          getallvideogateways(){
            this.auth();
            return this.httpClient.get(this.api+'/getallvideogateways',this.httpOptions); 
          }


          getvideogateways(x){
            this.auth();
            return this.httpClient.get(this.api+'/getvideogateways?mac_id='+x,this.httpOptions);
          }


          getallsubmodules(){
            this.auth();
            return this.httpClient.get(this.api+'/getallsubmodules',this.httpOptions); 
          }

          getsubmodule(x){
            this.auth();
            return this.httpClient.get(this.api+'/getsubmodule?_id='+x,this.httpOptions); 
          }
    
          getrole(x){
            this.auth();
            return this.httpClient.get(this.api+'/getrole?name='+x,this.httpOptions); 
          }

          getChannelZero(x){
            this.auth();
            return this.httpClient.get(this.api+'/getChannelZero?mac_id='+x,this.httpOptions); 
          }

          getchannelinfo(x){
            this.auth();
            return this.httpClient.get(this.api+'/getchannelinfo?mac_id='+x,this.httpOptions); 
          }

          updateuser(data){
            this.auth();
            return this.httpClient.post(this.api+'/updateuser',data,this.httpOptions); 
            
          }

          updatezone(data){
            this.auth();
            return this.httpClient.post(this.api+'/updatezone',data,this.httpOptions); 
             
          }

          updaterole_feature_mapping(data){
            this.auth();
            return this.httpClient.post(this.api+'/updaterole_feature_mapping',data,this.httpOptions); 
          }

          updaterole(data){
            this.auth();
            return this.httpClient.post(this.api+'/updaterole',data,this.httpOptions); 
          }

          updatesubmodule(data){
            this.auth();
            return this.httpClient.post(this.api+'/updaterole',data,this.httpOptions); 
          }

          updateiotgateway(data){
            this.auth();
            return this.httpClient.post(this.api+'/updateiotgateway',data,this.httpOptions); 
          }

          updatemodbus(data){
            this.auth();
            return this.httpClient.post(this.api+'/updatemodbus',data,this.httpOptions); 
          }

          addmodbus(data){
            this.auth();
            return this.httpClient.post(this.api+'/addmodbus',data,this.httpOptions); 
          }

          addsmartmeter(data){
            this.auth();
            return this.httpClient.post(this.api+'/addsmartmeter',data,this.httpOptions); 
          }

          getmodbus(x){
            this.auth();
            return this.httpClient.get(this.api+'/getmodbus?_id='+x,this.httpOptions);
          }

          getmodbuslocationwise(x){
            this.auth();
            return this.httpClient.get(this.api+'/getmodbuslocationwise?location_id='+x,this.httpOptions);
          }

          getrouterlocationwise(x){
            this.auth();
            return this.httpClient.get(this.api+'/getrouterlocationwise?location_id='+x,this.httpOptions);
          }

          getmodbususerwise(){
            this.auth();
            return this.httpClient.get(this.api+'/getmodbususerwise',this.httpOptions);
          }
    
        }





  



