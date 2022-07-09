import { IUserProfile } from './../../model/profile';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { IUserLogin } from 'src/app/model/userLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogin!: IUserLogin;
  username!: string;
  password!: string;
  errorMessage!: string;
  regLink: string = '/chooseRegistration';
  loggedInUser!: IUserProfile;


  constructor() { }

  ngOnInit(): void {
  }

  
  isLoggedIn(): boolean {
    // return this.authenticationService.isLoggedIn();
    return true;
  }

  login(){

  }

  logout(){

  }

}
