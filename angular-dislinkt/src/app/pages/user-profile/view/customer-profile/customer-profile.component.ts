import { IUserProfile } from './../../../../model/profile';
import { Component, OnInit, Input } from "@angular/core";
import { IUser } from "src/app/model/user";


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['../user-profile.component.css'],
})
export class CustomerProfileComponent implements OnInit {
  @Input() userId!: string;
  @Input() user!: IUserProfile;
  

  constructor(
  ) {}

  ngOnInit(): void {
   
  }

  openDialog(){

  }
}
