import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { appointmentService } from 'src/app/Services/appointment.service';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() data?: any;
  
  appointment!:any;
  DoctorRegister!:any;

  constructor(private service:appointmentService,private docService:DoctorService,router: Router) {
    
   this.appointment={
     appointmentId:0,
     patientId:"",
     doctorId:"",
     date:"",
     timeSlot:"",
     details:""
    
   }
    
 

 
 

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
  

  
  ngOnInit(): void
  {

    this.docService.getDoctors().subscribe((details:any)=>this.DoctorRegister=details);
    const currentDate = new Date().toISOString().split('T')[0];
    let checkin = document.getElementById('date') as HTMLInputElement;
    checkin.min = currentDate;

   
  }
   
    
  
  
  Book(book:any){

    this.appointment.patientId=localStorage.getItem('UserID');
   this.appointment.doctorId=this.data;
console.log(this.appointment);

    this.service.bookappointment(this.appointment).subscribe((trainer: any) => console.log(trainer));
    if(confirm("Appointment Booked successfully!!! "))
    {
      window.location.reload();
    }
  }


 
   }
   export class AppointmentModel{
    appointmentId:number=0;
    patientId:string="";
    doctorId:string="";
    date:string=""
    timeSlot:string="";
    details:string="";
    medicalInfo:string="";
    feedback:string="";
   }