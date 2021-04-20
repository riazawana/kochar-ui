import { Component, OnInit,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { BackendconnectionService } from '../backendconnection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private router: Router,
    private backend: BackendconnectionService 
            ){ }

            email:string;
            password:string;
   
 

  onLogin(form: NgForm){

  //  alert(form.value.email);
    if(form.invalid){
      return;
    }
    // const loginData = {
    //   email:form.value.email,
    //   password: form.value.password,
    // };

    const loginData = {
      username:'arsh',
      password: 'asdf',
      grant_type:'password',
      client_id:'angular-web-client'
      // ,
      // client_secret:'469109fc-5641-4cc3-b799-af6ddd05da31',
      // scope:'openid'
    };

   // alert(loginData);
   // console.log(loginData);

    this.backend.login(loginData)
    .subscribe((data)=> { 
      alert("success")
      // console.log("Data:",data);

      //  if(data["success"] == true){
      //   sessionStorage.setItem('userdata', JSON.stringify(data["data"]));
      //   sessionStorage.setItem('token', JSON.stringify(data["token"]));
      //   if(data["data"].roles[0].name =="Admin"){
      //     sessionStorage.setItem('features', "All");
      //   }else{
      //   sessionStorage.setItem('features', JSON.stringify(data["data"].features[0].mapping));
      //   }



      //   this.router.navigate(['/kochar/profile']);
      //  }else{
      //    return;
      //  }


    });

  
  }
  ngOnInit(){
    
  }

  

}
