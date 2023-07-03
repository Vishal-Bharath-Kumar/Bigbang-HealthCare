import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SpecialitiesComponent } from './User/specialities/specialities.component';
import { SpecialComponent } from './User/special/special.component';
import { AppointmentComponent } from './User/appointment/appointment.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:SpecialitiesComponent},
  {path:'login',component:LoginComponent},
  {path:'special',component:SpecialComponent},
  {path:'appoint',component:AppointmentComponent},
  {path:'register',component:RegisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
