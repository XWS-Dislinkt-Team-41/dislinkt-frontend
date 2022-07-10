import { IUserProfile } from './../../../model/profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user!: IUserProfile;
  userId!: string;
  roles: string[] = [
    'ROLE_USER',
    'ROLE_ADMIN',
    'ROLE_FISHING_TRAINER',
    'ROLE_ADMIN',
  ];
  constructor(
    private _profileService: UserProfileService,
    private _userService: AuthenticationService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this._route.snapshot.paramMap.get('id')!;
    this._profileService
      .getUserById('626ed920b5d7948d48ffc170')
      .subscribe((user) => {
        this.user = user.user;
      });
    // this._userService.getUser().subscribe(user=>{
    //   this._profileService.getUserById(user.id).subscribe(userInfo=>{
    //     this.user = userInfo;
    //   })
    // });
    // this._profileService.getUserById(this.userId).subscribe((user) => {
    //   this.user = user;
    // user.roles.some((role) => {
    //   this._route.params.subscribe((data) => {
    //     this.userId = data.id;
    //     this._userService
    //       .checkUser(this.userId)
    //       .subscribe((data) => (this.user = data));
    //   });
    // });
    // });
  }
}
