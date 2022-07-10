import { IUserProfile } from 'src/app/model/profile';
import { Role } from './../model/role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IToken } from '../model/token';
import { IUser } from '../model/user';
import { IUserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authUrl = `${environment.dislinktUrl}/auth`;
  private userUrl = `${environment.dislinktUrl}/user`;

  private accessToken = localStorage.getItem('jwt');
  public userSubject = new BehaviorSubject<IUserProfile>({} as IUserProfile);
  public userObs = this.userSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private router: Router, private http: HttpClient) {
    this.getUser();
  }

  getUser(): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(`${this.userUrl}/principal`).pipe(
      map((user: IUserProfile) => {
        this.userSubject.next(user);
        return user;
      })
    );
  }

  public get user(): IUserProfile {
    return this.userSubject.value;
  }

  login(user: IUserLogin): Observable<IToken> {
    return this.http.post<IToken>(`${this.authUrl}/login`, user).pipe(
      map((res: IToken) => {
        localStorage.setItem('jwt', res.token);
        this.accessToken = res.token;
        this.getUser().subscribe();
        return res;
      })
    );
  }

  logout() {
    this.purgeUser();
    localStorage.removeItem('jwt');
    this.accessToken = null;
    this.router.navigate(['/login']);
  }

  purgeUser() {
    this.userSubject.next({} as IUserProfile);
  }

  getToken() {
    return this.accessToken;
  }

  isLoggedIn() {
    return this.accessToken !== undefined && this.accessToken !== null;
  }

  isAuthorized(role: Role): Observable<boolean> {
    return this.http.post<boolean>(`${this.authUrl}/authorize`, role);
  }
}
