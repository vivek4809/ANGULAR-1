import { CapbookServicesService } from './../../services/capbook-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  _emailID: string;
  _password: string;
  errorMessage:  string;
  addMessage:  string;
  errorAction: boolean;
  successAction: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private capbookService:  CapbookServicesService) { }
  get emailID(): string {
    return this._emailID;
  }
  set emailID(value: string) {
    this._emailID = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }
  onClick() {
    const user1: any = {
      emailID: this.emailID,
      password: this.password
    };

    this.capbookService.login(user1).subscribe(
      user => {
        this.successAction = true;
        this.errorAction = false;
        this.addMessage = 'Logged In Successfully!!';
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        console.log(this.addMessage);
        console.log(JSON.stringify(user));
        this.router.navigate(['/home']);
        }
    ,
      error => {
        this.errorAction = true;
        this.successAction = false;
        this.errorMessage = 'Invalid UserName/Password!';
      }
  );
  }

  ngOnInit() {
    this.errorAction = false;
    this.successAction = false;
  }
}
