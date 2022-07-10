import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUserLogin } from 'src/app/model/userLogin';
import { IUserProfile } from 'src/app/model/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userLogin: IUserLogin = {
    username: '',
    password: '',
  };
  loggedInUser!: IUserProfile;
  username!:string;
  password!:string;
  regLink!:string;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.getUser();
    if (this.isLoggedIn()) {
      this.authenticationService.getUser().subscribe();
    }
  }

  logout() {
    this.authenticationService.purgeUser();
    this.authenticationService.logout();
  }

  getUser() {
    this.authenticationService.userSubject.subscribe((user) => {
      if (user) {
        this.loggedInUser = user;
      }
    });
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  login(){
    this.authenticationService.login(this.userLogin).subscribe(() => {
      this.getUser();
    });
  }

}
