import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { WallPicComponent } from './wall-pic/wall-pic.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { WallPostsComponent } from './wall-posts/wall-posts.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileLayoutComponent } from './profile-layout.component';

@NgModule({
  declarations: [
    ProfilePicComponent,
    ProfilePageComponent,
    WallPicComponent,
    ProfileAboutComponent,
    FriendsComponent,
    PhotosComponent,
    WallPostsComponent,
    UpdateProfileComponent,
    CreatePostComponent,
    ProfileLayoutComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProfilePicComponent
  ]
})
export class ProfileModule { }
