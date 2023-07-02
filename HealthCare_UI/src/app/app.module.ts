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

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        SpecialitiesComponent,
        SpecialComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
        
    ]
})
export class AppModule { }
