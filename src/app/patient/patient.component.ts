import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {

  clientId: string | undefined;
  userId!: string;
  patients: any[] = [];
  firstName: string = "";
  dataArray: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute,private dataService: DataService) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.clientId = params['clientId'];
      this.userId = params['userId'];
    });
    this.patient();
  }

  public async patient() {

    const data = {
      ClientId: this.clientId,
      UserId: this.userId,
      FirstName: this.firstName
    };

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Set the Authorization header with the token
      }
    };

    await axios.post('http://localhost:3000/searchPatientByClientId', data, config)
      .then((response) => {
        if (response) {
          this.patients = response.data;
        }
      });
  }
  public viewPatientDetails(item: any){
    this.dataArray=item;
    console.log(this.dataArray);
    this.dataService.setDataArray(this.dataArray);
    this.router.navigateByUrl('/patientdetail');
  }
  public viewCurrentLocation(){
    this.router.navigateByUrl('/currentlocation');
  }
}
