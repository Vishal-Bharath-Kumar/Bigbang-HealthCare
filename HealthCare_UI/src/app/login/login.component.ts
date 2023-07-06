import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTOModel } from '../Models/UserDTO.model';
import { Router } from '@angular/router';
import { LoggedInUserModel } from '../register/register.component';
import { signupService } from '../Services/signup.service';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel
  role!:string |null;

  constructor(private service:signupService, private router : Router){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel

  }
  

 

  login(){

    this.service.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      alert("Login Successful")

      this.role=localStorage.getItem("role");
      setTimeout(() => {
        
       if(this.role == "Admin"){
        this.router.navigate(['/dashboard'])
       }
       else if(this.role == "Doctor"){
        this.router.navigate(['/doctor-home'])
       }
       else{
        this.router.navigate([''])
       }
      }, 1000);


    },
    err=>{
      console.log(err)
      alert("Invalid Username/password")
    });
  }

  move(){
    this.router.navigateByUrl('register');
  }
}