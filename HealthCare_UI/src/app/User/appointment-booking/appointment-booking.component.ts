import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { IDoctor } from 'src/app/Models/IDoctor';
@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myModal') modal: any; 
  // Add this line
  
  DoctorRegister!:any;

  openModal() {
    this.modal.nativeElement.style.display = 'block'; // Show the modal
  }
  DoctorDetail!:any
 
  constructor(private doctordet:DoctorService,router: Router) {

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
    this.doctordet. getDoctors().subscribe(detils=>this.DoctorRegister=detils);  
    // this.doctordet.DoctorDetail(localStorage.getItem('UserID')).subscribe(data=>{this.DoctorDetail=data
    //   localStorage.setItem('id',this.DoctorDetail.id)});
  }
  

  bookAppointment(c:any){
    this.selectedDoctorId = c.id;
  
  
  }


}
