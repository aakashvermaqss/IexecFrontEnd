import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ReferringdoctorComponent } from './referringdoctor/referringdoctor.component';
import { ImagesComponent } from './images/images.component';
import { NoteComponent } from './note/note.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { LastvisitComponent } from './lastvisit/lastvisit.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientComponent } from './patient/patient.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { MapComponentComponent } from './map-component/map-component.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "patient",
    component: PatientComponent
  },
  {
    path: "patientdetail",
    component: PatientdetailComponent
  },
  {
    path: "pharmacy",
    component: PharmacyComponent
  },
  {
    path: "referringdoctor",
    component: ReferringdoctorComponent
  },
  {
    path: "prescription",
    component: PrescriptionComponent
  },
  {
    path: "note",
    component: NoteComponent
  },
  {
    path: "images",
    component: ImagesComponent
  },
  {
    path: "lastvisit",
    component: LastvisitComponent
  },
  {
    path: "appointments",
    component: AppointmentsComponent
  },
  {
    path: "currentlocation",
    component: MapComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
