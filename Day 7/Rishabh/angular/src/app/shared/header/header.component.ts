import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _profileName:string;
  constructor() { }

  ngOnInit() {
    var user:User=JSON.parse(sessionStorage.getItem("loggedUser"));
    this._profileName=user.firstName+' '+user.lastName;
  }

}
