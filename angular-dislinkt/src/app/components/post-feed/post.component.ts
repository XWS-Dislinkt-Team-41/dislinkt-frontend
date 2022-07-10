import { IUserProfile } from './../../model/profile';
import { IPost, IComment } from './../../model/post';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  user!:IUserProfile;
  liked: boolean = false;
  commentToggle: boolean = false;
  comment: IComment={
    text:"",
    code:""
  };

  constructor(
    private _postService: PostService,
    private _profileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this._profileService
      .getUserById('626ed920b5d7948d48ffc170')
      .subscribe((user) => {
        this.user = user.user;
        if (this.post.likedBy != undefined) {
          if (this.post.likedBy.includes(this.user.id)) {
            this.liked = true;
          }
        }
      });
  }

  like() {
    if (this.liked == false) {
      this._postService
        .likePost(this.user.id, this.post.id)
        .subscribe((data) => {
          this.post = data.post;
          this.liked = true;
        });
    } else {
      this._postService
        .unlikePost(this.user.id, this.post.id)
        .subscribe((data) => {
          this.post = data.post;
          this.liked = false;
        });
    }
  }

  dislike() {
    this._postService
      .dislikePost(this.user.id, this.post.id)
      .subscribe((data) => {
        this.post = data.post;
      });
  }

  addComment() {
    this.commentToggle = true;
  }

  saveComment() {
    this.commentToggle = false;
    this._postService
      .addComment(this.user.id, this.post.id, this.comment)
      .subscribe((data) => {
        this.post.comments.push(data.comment);
      });
  }
}
