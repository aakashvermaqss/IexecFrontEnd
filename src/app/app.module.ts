import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoteComponent } from './note/note.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ReferringdoctorComponent } from './referringdoctor/referringdoctor.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ImagesComponent } from './images/images.component';
import { LastvisitComponent } from './lastvisit/lastvisit.component';
import { PatientComponent } from './patient/patient.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { MapComponentComponent } from './map-component/map-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoteComponent,
    PharmacyComponent,
    ReferringdoctorComponent,
    PrescriptionComponent,
    AppointmentsComponent,
    ImagesComponent,
    LastvisitComponent,
    PatientComponent,
    PatientdetailComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGNFxDo-HjdMm51LVZpCRKsW86fuL5hTU`;
    document.body.appendChild(script);
  }
}
