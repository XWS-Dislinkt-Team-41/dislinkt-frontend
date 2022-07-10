import { IUserProfile } from 'src/app/model/profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { IPost,emptyPost } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postImage: string = '';
  imageObject: Array<object> = [];
  post: IPost = emptyPost;
  imagePickerConf: object = {
    borderRadius: '4px',
    language: 'en',
    width: '320px',
    height: '240px',
  };
  link: string = '';
  currentUser!:IUserProfile;


  constructor(private postService: PostService,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.getUser().subscribe(user=>this.currentUser=user);
  }

  addPostImage(): void {
    if (this.postImage != '' && this.postImage != null)
    this.post.image = this.postImage
  }

  onImageChange(event: string): void {
    this.postImage = event;
  }

  addPost(): void {
    this.postService.addPost(this.currentUser.id, this.post).subscribe(
      () => {}
    );
  }
  
  addLink(): void {
    this.post.links.push(this.link);
  }

}
