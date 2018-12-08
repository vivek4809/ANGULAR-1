import { User } from './../../../interfaces/User/user';
import { CapbookServicesService } from './../../../services/capbook-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  _firstName: string;
  _lastName: string;
  _dateOfBirth: string;
  _password: string;
  _confirmPassword: string;
  _emailID: string;
  _age: number;
  _mobileNo: number;
  _gender: string;
  _firstSecurityAnswer: string;
  _secondSecurityAnswer: string;
  _user: User;
  _idExists = false;
  errorMessage: string;
  successMessage: string;
  genderList: string[] = ['Male', 'Female'];
  errorAction: boolean;
  successAction: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private capbookService: CapbookServicesService) { }

  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    this._firstName = value;
  }
  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
  get dateOfBirth(): string {
    return this._dateOfBirth;
  }
  set dateOfBirth(value: string) {
    this._dateOfBirth = value;
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
  get emailID(): string {
    return this._emailID;
  }
  set emailID(value: string) {
    this._emailID = value;
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
  get mobileNo(): number {
    return this._mobileNo;
  }
  set mobileNo(value: number) {
    this._mobileNo = value;
  }
  get gender(): string {
    return this._gender;
  }
  set gender(value: string) {
    this._gender = value;
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
  ngOnInit() {
    this.errorAction = false;
    this.successAction = false;
  }

  checkEmail() {
    console.log(this.emailID);
    const findUser: any = {
      emailID: this.emailID,
    };
    this.capbookService.fetchUserDetails(findUser).subscribe(
      user => {
        this._user = user;
        this._idExists = true;
        this.errorMessage = 'Email Account already exists!';
        this.errorAction = true;
        this.successAction = false;
      }
    ,
      error => {
        this.errorAction = false;
        this.successAction = false;
      }
  );
  }

  onClick() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Password/Confirm Password donot match!';
      this.errorAction = true;
      this.successAction = false;
    } else if (this.password === this.confirmPassword) {
      const _user: any = {
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        password: this.password,
        emailID: this.emailID,
        age: this.age,
        mobileNo: this.mobileNo,
        gender: this.gender,
        firstSecurityAnswer: this._firstSecurityAnswer,
        secondSecurityAnswer: this._secondSecurityAnswer
      };
      console.log(JSON.stringify(_user));
      this.capbookService.acceptUserDetails(_user).subscribe(
        tempMessage => {
          this.errorAction = false;
          this.successAction = true;
          this.successMessage = 'Registration Successful!!';
          console.log(this.successMessage);
        }
      ,
        error => {
          this.errorAction = true;
          this.successAction = false;
          this.errorMessage = error;
        }
    );
    }
  }
}
