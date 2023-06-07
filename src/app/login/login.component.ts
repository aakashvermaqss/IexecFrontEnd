import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginValid = true;
  clientId: string = "";
  userId: string = "";

  constructor(private router: Router) { }
  ngOnInit() {

  }

  public async login() {

    const data = {
      ClientId: this.clientId,
      UserId: this.userId
    };

    await axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: data,
      responseType: 'json'
    })
      .then( (response) => {
        if(response.data.code==200){
          localStorage.setItem('token', response.data.token);
          this.router.navigateByUrl(`/patient?clientId=${this.clientId}&userId=${this.userId}`);
          this.loginValid = true;
        } 
        else
        {
          this.loginValid = false;
          alert("Invalid Credentials");
        }
      });
  }
}
