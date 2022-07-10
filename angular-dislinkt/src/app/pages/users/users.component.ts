import { IUserProfile } from 'src/app/model/profile';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() users: IUserProfile[] = [];
  filter: string = '';

  constructor(private _profileService: UserProfileService) {}

  ngOnInit(): void {
    this._profileService.getUsers().subscribe((data) => {
      this.users = data.users;
    });
  }

  searchUsers(filter: string) {
    this._profileService.searchUsers(filter).subscribe((data) => {
      this.users = data.users;
    });
  }
}
