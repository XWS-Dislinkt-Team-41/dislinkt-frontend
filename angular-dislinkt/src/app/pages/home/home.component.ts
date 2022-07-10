import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/post';
import { IUserProfile } from 'src/app/model/profile';
import { PostService } from 'src/app/services/post.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user!: IUserProfile;
  posts: IPost[] = [];

  constructor(
    private _profileService: UserProfileService,
    private _postService: PostService
  ) {}

  ngOnInit(): void {
    this._profileService
      .getUserById('626ed920b5d7948d48ffc170')
      .subscribe((user) => {
        this.user = user.user;
        this._postService.getConnectedPosts(this.user.id).subscribe((data) => {
          this.posts = data.posts;
        });
      });
  }
}
