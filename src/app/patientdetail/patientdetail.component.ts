import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent implements OnInit {
  receivedData: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute,private dataService: DataService) {
    this.receivedData = this.dataService.getDataArray()
   }
  ngOnInit() {
    console.log(this.receivedData);
  }

  public async getPharmacy() {
    this.router.navigateByUrl('/pharmacy');

  }

  public async getReferringDoctor() {
    this.router.navigateByUrl('/referringdoctor');
  }

  public async getPrescription() {
    this.router.navigateByUrl('/prescription');
  }

  public async getAppointments() {
    this.router.navigateByUrl('/appointments');
  }

  public async getNotes() {
    this.router.navigateByUrl('/note');
  }

  public async getImages() {
    this.router.navigateByUrl('/images');
  }

}
