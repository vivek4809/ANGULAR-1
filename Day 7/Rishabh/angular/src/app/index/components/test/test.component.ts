import { User } from './../../../interfaces/User/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const user: User = JSON.parse(sessionStorage.getItem('loggedUser'));
    console.log('Session tut');
    console.log(user);
    console.log(user.emailID);
  }
}
