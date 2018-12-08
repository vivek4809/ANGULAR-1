import { User } from './../../../interfaces/User/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapbookServicesService } from 'src/app/services/capbook-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  _emailID: string;
  _firstSecurityAnswer: string;
  _secondSecurityAnswer: string;
  _password: string;
  _confirmPassword: string;
  _user: User;
  _message: string;
  _error: string;
  _idExists = false;
  errorAction: boolean;
  successAction: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private capbookServices: CapbookServicesService) { }

  get emailID(): string {
    return this._emailID;
  }
  set emailID(value: string) {
    this._emailID = value;
  }

  get firstSecurityAnswer(): string {
    return this._firstSecurityAnswer;
  }
  set firstSecurityAnswer(value: string) {
    this._firstSecurityAnswer = value;
  }

  get secondSecurityAnswer(): string {
    return this._secondSecurityAnswer;
  }
  set secondSecurityAnswer(value: string) {
    this._secondSecurityAnswer = value;
  }

  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }
  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  ngOnInit() {
    this.errorAction = false;
    this.successAction = false;
  }

  checkEmail() {
    console.log(this.emailID);
    const findUser: any = {
      emailID: this.emailID,
    };
    this.capbookServices.fetchUserDetails(findUser).subscribe(
      user => {
        this._user = user;
        this._idExists = true;
        this.errorAction = false;
        this.successAction = false;
      }
    ,
      error => {
        this._error = 'Email Account doesn\'t exists!';
        this.errorAction = true;
        this.successAction = false;
      }
  );
  }

  onClick() {
    const findUser: any = {
      emailID: this.emailID,
    };

    this.capbookServices.fetchUserDetails(findUser).subscribe(
        user => {
          this._user = user;
          console.log('Fetched Details!');
          console.log(JSON.stringify(this._user));
          if (this._user.password.toLowerCase() === this.password.toLowerCase()) {
            console.log('Old Password and New Password match!');
            this._error = 'Old Password and New Password match!';
            this.errorAction = true;
            this.successAction = false;
          } else if (this.password.toLowerCase() !== this.confirmPassword.toLowerCase()) {
            console.log('Password do not match');
            this._error = 'New Password/Confirm New Password do not match!';
            this.errorAction = true;
            this.successAction = false;
          } else if (this._user.firstSecurityAnswer.toLowerCase() !== this.firstSecurityAnswer.toLowerCase()) {
            console.log('Incorrect Security Answer 1');
            this._error = 'Incorrect Security Answer 1!';
            this.errorAction = true;
            this.successAction = false;
          } else if (this._user.secondSecurityAnswer.toLowerCase() !== this.secondSecurityAnswer.toLowerCase()) {
            console.log('Incorrect Security Answer 2');
            this._error = 'Incorrect Security Answer 2!';
            this.errorAction = true;
            this.successAction = false;
          } else {
            const updateUser: any = {
              emailID : this.emailID,
              password : this.password,
            };
            this.capbookServices.changePassword(updateUser).subscribe(
                success => {
                  this.errorAction = false;
                  this.successAction = true;
                  this._message = 'You have succesfully reset your password.';
                  console.log('Password Updated');
                  /* this.router.navigate(['/index/signin']); */
                }
              ,
            );
          }
        }
      ,
        error => {
          this._error = 'Details Not Found!';
          this.errorAction = true;
          this.successAction = false;
        }
    );

    /* this.capbookServices.forgotPassword(user1).subscribe(
      tempmessage => {
        this._message = 'You have succesfully reset your password.';
        console.log(this._message);
      },
      error=>{
        this._error=error;
        console.log("error");
      }
    ); */
  }
}
