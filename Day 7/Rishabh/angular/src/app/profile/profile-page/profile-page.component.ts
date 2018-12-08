import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User/user';
import { ActivatedRoute, Router } from '@angular/router';
import { CapbookServicesService } from 'src/app/services/capbook-services.service';
import { DatePipe } from '@angular/common';
import { Profile } from 'selenium-webdriver/firefox';
import { Post } from 'src/app/interfaces/Post/post';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  bio: string="Add Bio!!";
  _profileName:string;
  _postText: string;
  errorMessage:string;
  profile:Profile;
  posts:Post[];
  constructor(private route: ActivatedRoute, private router: Router, private capbookService:  CapbookServicesService,private datePipe: DatePipe) { }
  
  get postText():string{
    return this._postText;
  }
  set postText(value:string){
    this._postText=value;
  }

  ngOnInit() {
    var user:User=JSON.parse(sessionStorage.getItem("loggedUser"));
    this._profileName=user.firstName+' '+user.lastName;
    this.bio;
    this.getAllPosts();
  }

  createPost(){
    var _postDate=new Date();
    var user:User=JSON.parse(sessionStorage.getItem("loggedUser"));
    const post:any={
      postText:this.postText,
      postDate:this.datePipe.transform(_postDate, 'yyyy-MM-dd'),
      postTime:this.datePipe.transform(_postDate,'HH:mm'),
      likesCount:0,
      dislikesCount:0,
      profile:user.profile
    };
    console.log(JSON.stringify(post));
    this.capbookService.updateStatus(post).subscribe(
      user => {
        }
    ,
      error => {
        this.errorMessage = 'Status Not Updated!!';
      }
  );
      this.ngOnInit();
  }

  getAllPosts(){
    var user:User=JSON.parse(sessionStorage.getItem("loggedUser"));
    this.capbookService.getAllPosts(user).subscribe(
      tempPosts => {
        this.posts=tempPosts;
      }
    ,
      error => {
        this.errorMessage = 'No posts found!!';
      }
  );
  }

  
}
