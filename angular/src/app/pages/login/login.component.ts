import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    password:"",
    username:""
  }
  userInfoValidator = {
    email:false,
    password:false,
    username:false
  }
  login(){
    if(this.userInfo.password === ""){
      console.log("password empty");
      this.userInfoValidator.password = false;
    }else{
      this.userInfoValidator.password = true;
    }
    if(this.userInfo.username === ""){
      console.log("userName empty");
      this.userInfoValidator.username = false;
    }else{
      this.userInfoValidator.username = true;
      this.Router.navigate(['/dashboard/'+this.userInfo.username]);
    }
  }
}
