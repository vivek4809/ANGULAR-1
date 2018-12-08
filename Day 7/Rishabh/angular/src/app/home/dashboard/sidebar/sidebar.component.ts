import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  _profileName:string;
  constructor() { }

  ngOnInit() {
    var user:User=JSON.parse(sessionStorage.getItem("loggedUser"));
    this._profileName=user.firstName+' '+user.lastName;
  }

}
