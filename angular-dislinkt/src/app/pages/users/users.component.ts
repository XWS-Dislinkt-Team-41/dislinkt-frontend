import { IUserProfile } from 'src/app/model/profile';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() users: IUserProfile[] = [];
  recommendedUsers: IUserProfile[] = [];

  filter: string = '';

  constructor(private _profileService: UserProfileService,
    private _connectService: ConnectService,
    private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this._profileService.getUsers().subscribe((data) => {
      this.users = data.users;
    });
    this._connectService.getUserConnections('626ed920b5d7948d48ffc170').subscribe(data=>{
      data.users.forEach((element:any) => {
        this._profileService.getUsers().subscribe((data2) => {
          this.recommendedUsers = data2.users.filter((user:any)=>element.id!=user.id);
        });
      });
    })
  }

  searchUsers(filter: string) {
    if(this._authenticationService.isLoggedIn())
      this._profileService.searchUsers(filter).subscribe((data) => {
        this.users = data.users;
      });
    else
      this._profileService.searchPublicUsers(filter).subscribe((data) => {
        this.users = data.users;
      });
  }
}
