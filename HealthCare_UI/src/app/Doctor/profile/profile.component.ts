import { Component,OnInit } from '@angular/core';
import {DoctorService} from'../../Services/doctor.service'
import { IDoctor } from 'src/app/Models/IDoctor';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  constructor(private service:DoctorService) {
    
  }
  DoctorDetail!:any
  updateDoctor:IDoctor={
    email: '',
    specialization: '',
    experiance:0,
    phone: '',
    image: ''
  }
  id!:string;
  ngOnInit(): void {
    this.service.DoctorDetail(localStorage.getItem('UserID')).subscribe(data=>{this.DoctorDetail=data
      localStorage.setItem('id',this.DoctorDetail.id)});
    
  }
  handleDoctorUpdate()
  {
  console.log(this.updateDoctor)
    this.service.UpdateDoctor(localStorage.getItem('id'),this.updateDoctor).subscribe(dt=>console.log(dt))

    window.location.reload()
  }
}


