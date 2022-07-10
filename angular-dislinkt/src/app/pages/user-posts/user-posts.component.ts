import { IPost } from 'src/app/model/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserProfile } from 'src/app/model/profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  user!: IUserProfile;
  posts: IPost[] = [];
  userId!: string;
  arePostsVisible: boolean = false;
  roles: string[] = ['ROLE_USER', 'ROLE_ADMIN'];
  constructor(
    private _profileService: UserProfileService,
    private _postService: PostService,
    private _userService: AuthenticationService,
    private _connectService: ConnectService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id')!;
    this._userService.getUser().subscribe((user) => {
      this.user = user;
      this._postService.getUserPosts(user.id).subscribe(data=>{
        this.posts = data.posts;
      })
    });
    // this._profileService
    //   .getUserById('626ed920b5d7948d48ffc170')
    //   .subscribe((user) => {
    //     this._connectService.getUserConnections(user.id).subscribe((data) => {
    //       data.connections.every((connection: any) => {
    //         if (connection.cUserId === this.userId) {
    //           this.arePostsVisible = true;
    //           return false;
    //         }
    //         return true;
    //       });
    //     });
    //     if (
    //       user.isPrivate === false ||
    //       user.id === '626ed920b5d7948d48ffc170'
    //     ) {
    //       this.arePostsVisible = true;
    //     }
    //     this.user = user.user;
    //     if (this.arePostsVisible) {
    //       this._postService.getUserPosts(this.user.id).subscribe((data) => {
    //         this.posts = data.posts;
    //       });
    //     } else {
    //       this._postService
    //         .getPublicUserPosts(this.user.id)
    //         .subscribe((data) => {
    //           this.posts = data.posts;
    //         });
    //     }
    //   });
  }
}
