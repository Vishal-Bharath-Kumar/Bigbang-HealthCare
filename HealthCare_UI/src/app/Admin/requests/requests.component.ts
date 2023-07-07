import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { signupService } from 'src/app/Services/signup.service';
import { LoggedInUserModel } from 'src/app/register/register.component';
import { Location } from '@angular/common';
import { DoctorStatus } from "../../Models/DoctorStatus";
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {

  public requests: any;
  loggedInUser:LoggedInUserModel;
  registration_status = false;

  register: { id: string; email: string;  role: string; password: string; hashKey: string; passwordClear: string; };
  constructor(private router :Router , private docservice : DoctorService,private service:signupService ,private location: Location) { 
    this.register =
    {
      id:"",
      email:"",
      role: "",
      password: "",
      hashKey: "",
      passwordClear: ""
    }
    this.loggedInUser=new LoggedInUserModel();
  }
  
  ngOnInit(): void {
   
      this.docservice.request().subscribe(result => {
        this.requests = result;
        console.log(this.requests);
      });
    
  }
  handlePost(req:any)
  {
    this.register.id=req.id;
    this.register.email=req.email;
    
    this.register.role=req.role;
    
    this.register.passwordClear=req.password;
  
    
    req.requestStatus="Accepted";
   
     this.handleUpdate(req);

    this.service.signup(this.register).subscribe(data=>{
      console.log("register in component")
      
    },
    err=>{
      console.log(err)
    });
  
}
handlechangeStatus(ids:string)
{
  this.docservice.updateSataus(ids,{requestStatus:'Accepted'}).subscribe(data=>{
    console.log('Success',data)
  })
}
handleUpdate(req:any){
  this.docservice.DoctorStatus(req.id,req).subscribe(data=>{
    console.log("Doctor Status updated",req)
    window.location.reload();
  })
  
}
  

  handleDelete(id:string){
    this.docservice.DeleteDoctorRequest(id).subscribe(data=>{
      window.location.reload();
      console.log("Doctor request deleted")
        //  window.location.reload();
    })
     
  }
  
}    
    
  

  


