import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SpecialitiesComponent } from './User/specialities/specialities.component';
import { SpecialComponent } from './User/special/special.component';

const routes: Routes = [
  {path:'home',component:SpecialitiesComponent},
  {path:'login',component:LoginComponent},
  {path:'special',component:SpecialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
