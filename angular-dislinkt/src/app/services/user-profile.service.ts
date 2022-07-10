import { IResponse } from './../model/response';
import { IUserProfile } from './../model/profile';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  searchPublicUsers(filter:string): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/user/search/public`,JSON.stringify(filter)).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  searchUsers(filter:string): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/user/search`,JSON.stringify(filter)).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${id}`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  changeAccountPrivacy(userId:string, isPrivate:boolean):Observable<any>{
    return this.http.put<any>(environment.dislinktUrl + `/user/personal`,{id:userId,isPrivate:isPrivate}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updatePersonalInfo(user:IUserProfile):Observable<any>{
    return this.http.put<any>(environment.dislinktUrl + `/user/personal`,user).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateCareerInfo(user:IUserProfile):Observable<IUserProfile>{
    return this.http.put<IUserProfile>(environment.dislinktUrl + `/user/career`,user).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateInterestsInfo(user:IUserProfile):Observable<IUserProfile>{
    return this.http.put<IUserProfile>(environment.dislinktUrl + `/user/interests`,user).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(() => new Error('Error'));
  }
}
