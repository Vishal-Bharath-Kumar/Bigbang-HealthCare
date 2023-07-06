import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "../Models/UserDTO.model";
import {Injectable} from '@angular/core';
import { AppointmentModel } from "../User/appointment/appointment.component";

@Injectable()
export class appointmentService{
    constructor(private httpClient:HttpClient){

    }

    bookappointment(book:AppointmentModel){
        return this.httpClient.post("https://localhost:7132/api/Appointments",book);

    }

    getAppointmentsdetails(){
        return this.httpClient.get("https://localhost:7132/api/Appointments");
    }

    getUserAppointmentsdetails(id:any){
        return this.httpClient.get("https://localhost:7132/api/Appointments/"+id);
    }
}