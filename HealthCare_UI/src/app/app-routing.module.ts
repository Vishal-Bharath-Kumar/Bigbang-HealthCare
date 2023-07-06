import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SpecialitiesComponent } from './User/specialities/specialities.component';
import { SpecialComponent } from './User/special/special.component';
import { AppointmentComponent } from './User/appointment/appointment.component';
import { RegisterComponent } from './register/register.component';
import { RequestsComponent } from './Admin/requests/requests.component';
import { DoctorListComponent } from './Admin/doctor-list/doctor-list.component';
import { DochomeComponent } from './Doctor/dochome/dochome.component';
import { ProfileComponent } from './Doctor/profile/profile.component';
import { AuthGuard } from './Guard/auth.guard';
import { AppointmentBookingComponent } from './User/appointment-booking/appointment-booking.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';


const routes: Routes = [
  {path:'',component:SpecialitiesComponent},
  {path:'login',component:LoginComponent},
  {path:'special',component:SpecialComponent,canActivate: [AuthGuard] },
  {path:'appoint',component:AppointmentBookingComponent,canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'doctor-List',component:DoctorListComponent,canActivate:[AuthGuard] },
  {path:'doctor-home',component:DochomeComponent, canActivate:[AuthGuard] },
  {path:'doctor-profile',component:ProfileComponent,canActivate:[AuthGuard] },
  {path:'admin-home',component:AdminhomeComponent,canActivate: [AuthGuard]},
  {path:'dashboard',component:RequestsComponent,canActivate: [AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
