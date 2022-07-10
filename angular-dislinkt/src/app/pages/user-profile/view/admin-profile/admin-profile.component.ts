import { IUserProfile } from './../../../../model/profile';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['../user-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
  @Input() userId!: number;
  @Input() user!: IUserProfile;

  constructor() {}

  ngOnInit(): void {}

  openDialog(): void {
  }
}
