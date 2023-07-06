import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { registerModel } from "../Models/register.model";
import { UserDTOModel } from "../Models/UserDTO.model";
import { DoctorRegisterModel } from "../Models/DoctorRegister.model";
import { IDoctor } from "../Models/IDoctor";
import { DoctorStatus } from "../Models/DoctorStatus";

@Injectable()
export class DoctorService{
    constructor(private httpClient:HttpClient){

    }
    DoctorSignup(register:DoctorRegisterModel){
        console.log("register in servive");
        console.log(register);
        return this.httpClient.post("https://localhost:7132/api/Doctors",register);
    }
    request(){
        return this.httpClient.get("https://localhost:7132/api/Doctors");
    }

    DoctorStatus(id:string,req:DoctorRegisterModel){
        
        return this.httpClient.put(`https://localhost:7132/api/Doctors`+'/'+id,req);
    }

    DeleteRequest(id:string,req:DoctorRegisterModel){
        return this.httpClient.delete("https://localhost:7132/api/Doctors/"+id);

    }

    DeleteDoctorRequest(id:string){
        return this.httpClient.delete("https://localhost:7132/api/Doctors/"+id);

    }
    
    getDoctors(){
        return this.httpClient.get("https://localhost:7132/api/Doctors/Doctor");
    }

    DoctorDetail(id:string|null){
        return this.httpClient.get("https://localhost:7132/api/Doctors/"+id);
    }
    UpdateDoctor(id:string|null,dtr:IDoctor)
    {
        return this.httpClient.put("https://localhost:7132/api/Doctors/"+id,dtr);
    }

    updateDoctorDetail(id:string,req:DoctorRegisterModel){
        return this.httpClient.put("https://localhost:7132/api/Doctors/Update/"+id,req)
    }

    updateSataus(id:string,req:DoctorStatus){
        console.log("https://localhost:7132/api/Doctors/UpdateStatus/"+id+"?id="+id,req)
        return this.httpClient.put("https://localhost:7132/api/Doctors/UpdateStatus/"+id+"?id="+id,req)
    }
}