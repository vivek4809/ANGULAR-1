import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.css']
})
export class ProfileAboutComponent implements OnInit {
  today= new Date();
  jstoday = '';
  date='';
  time='';
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.date=this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.time=this.datePipe.transform(this.today,'hh:mm:ss a');
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

}
