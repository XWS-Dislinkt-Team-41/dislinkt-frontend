import { IUserProfile, emptyUserProfile } from './../model/profile';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, distinctUntilChanged, map } from 'rxjs/operators';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  tap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user: IUserProfile = emptyUserProfile;
  
  constructor(private http: HttpClient) { }

 registerUser(user: IUserProfile): Observable<IUserProfile> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, user);
 }
  
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
