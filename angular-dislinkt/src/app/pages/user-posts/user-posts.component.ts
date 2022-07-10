import { IPost } from './../../model/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserProfile } from 'src/app/model/profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  user!: IUserProfile;
  posts: IPost[] = [];
  userId!: string;
  roles: string[] = [
    'ROLE_USER',
    'ROLE_ADMIN',
    'ROLE_FISHING_TRAINER',
    'ROLE_ADMIN',
  ];
  constructor(
    private _profileService: UserProfileService,
    private _postService: PostService,
    private _userService: AuthenticationService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id')!;
    this._profileService
      .getUserById('626ed920b5d7948d48ffc170')
      .subscribe((user) => {
        this.user = user.user;
        if (this.user.id === '626ed920b5d7948d48ffc170') {
          this._postService.getUserPosts(this.user.id).subscribe((data) => {
            this.posts = data.posts;
          });
        } else {
          this._postService.getPublicUserPosts(this.user.id).subscribe((data) => {
            this.posts = data.posts;
          });
        }
      });
  }
}
