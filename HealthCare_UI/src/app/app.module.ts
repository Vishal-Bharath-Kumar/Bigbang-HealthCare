import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialitiesComponent } from './User/specialities/specialities.component';
import { SpecialComponent } from './User/special/special.component';
import { AppointmentComponent } from './User/appointment/appointment.component';
import { RegisterComponent } from './register/register.component';
import { signupService } from './Services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { RequestsComponent } from './Admin/requests/requests.component';
import { DoctorService } from './Services/doctor.service';

import { CommonModule, Location } from '@angular/common';
import { DoctorListComponent } from './Admin/doctor-list/doctor-list.component';
import { DocnavbarComponent } from './Doctor/docnavbar/docnavbar.component';
import { DochomeComponent } from './Doctor/dochome/dochome.component';
import { ProfileComponent } from './Doctor/profile/profile.component';
import { ChecklistComponent } from './Doctor/checklist/checklist.component';
import { appointmentService } from './Services/appointment.service';
import { AppointmentBookingComponent } from './User/appointment-booking/appointment-booking.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        SpecialitiesComponent,
        SpecialComponent,
        AppointmentComponent,
        RegisterComponent,
        AdminhomeComponent,
        RequestsComponent,
        DoctorListComponent,
        DocnavbarComponent,
        DochomeComponent,
        ProfileComponent,
        ChecklistComponent,
        AppointmentBookingComponent,
        AppointmentComponent

        
    

    ],
    providers: [signupService,DoctorService,appointmentService ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule
        
    ]
})
export class AppModule { }
