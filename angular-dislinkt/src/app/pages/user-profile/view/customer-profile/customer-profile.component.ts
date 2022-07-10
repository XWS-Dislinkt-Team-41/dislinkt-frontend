import { IUserProfile } from './../../../../model/profile';
import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['../user-profile.component.css'],
})
export class CustomerProfileComponent implements OnInit {
  @Input() userId!: string;
  @Input() user!: IUserProfile;

  constructor(private _profileService: UserProfileService) {}

  ngOnInit(): void {}

  openDialog() {}

  changePrivacy() {
    this._profileService
      .changeAccountPrivacy(this.user.id, !this.user.isPrivate)
      .subscribe((user) => {
        this.user = user;
      });
  }
}
