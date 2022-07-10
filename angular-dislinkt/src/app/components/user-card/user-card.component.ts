import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserProfile } from 'src/app/model/profile';
import { IUser } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnectService } from 'src/app/services/connect.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUserProfile;
  currentUser!: IUserProfile;

  constructor(
    private _connectService: ConnectService,
    private _profileService: UserProfileService,
    private _userService: AuthenticationService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._userService.getUser().subscribe((user) => (this.currentUser = user));
  }

  connect(event:any) {
    event.stopPropagation();
    this._connectService
      .connect('626ed920b5d7948d48ffc170', this.user.id, this.user.isPrivate)
      .subscribe((connection) => {});
  }

  userProfile(id:string) {
    this._router.navigateByUrl(`/userPosts`);
  }

}
