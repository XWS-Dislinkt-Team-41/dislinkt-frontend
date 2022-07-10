import { IUserProfile } from 'src/app/model/profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../model/user';
import { ConnectService } from '../services/connect.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.css'],
})
export class FollowRequestsComponent implements OnInit {
  addFormVisible: boolean = false;
  jobOfferId!: number;
  filter: string = '';
  connectionUsers: IUserProfile[] = [];

  constructor(
    private _router: Router,
    private _connectService: ConnectService,
    private _toastr: ToastrService,
    private _profileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this._connectService
      .getUserConnectRequest('626ed920b5d7948d48ffc170')
      .subscribe((data) => {
        data.connection.array.forEach((element: any) => {
          this._profileService
            .getUserById(element.cUserId)
            .subscribe((user) => {
              this.connectionUsers.push(user);
            });
        });
      });
  }

  approveRequest(cUserId: string) {
    this._connectService.acceptConnectRequest('626ed920b5d7948d48ffc170',cUserId).subscribe(data=>{
      this.connectionUsers = this.connectionUsers.filter(user=>{user.id=data.connection.cUserId});
    })
  }

  declineRequest(cUserId: string) {
    this._connectService.declineConnectRequest('626ed920b5d7948d48ffc170',cUserId).subscribe(data=>{
      this.connectionUsers = this.connectionUsers.filter(user=>{user.id=data.connection.cUserId});
    })
  }
}
