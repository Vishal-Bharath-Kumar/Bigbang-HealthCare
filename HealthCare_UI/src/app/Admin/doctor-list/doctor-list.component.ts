import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { signupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  
  
  DoctorRegister!:any;

 
  constructor(private doctordet:DoctorService,private service:signupService,router: Router) {

    this.DoctorRegister={
      id:"",
      email:"",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"",
      password:""
    }
   }
  

  selectedDoctorId?: number;
  ngOnInit(): void
  {

    this.doctordet.getDoctors().subscribe(detils=>this.DoctorRegister=detils);

   
  }

  deleteDoctor(id: any) {
    
  

    this.doctordet.DeleteDoctorRequest(id).subscribe(
      () => {
       
       alert("Doctor "+id+" deleted Successfully!!!")
       
          window.location.reload();
       
      },
      error => {
        console.error(error);
       
      }
    );
  
     
 }

}
