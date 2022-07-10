import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http: HttpClient) { }

  getUserConnections(userId:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${userId}/connect`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUserSuggestions(userId:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${userId}/connect/suggestions`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUserConnectRequest(userId:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${userId}/connect/invitation`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  connect(userId:string, cUserId:string, isPrivate:boolean): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/user/${userId}/connect`,{id:cUserId,private:isPrivate}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  unconnect(userId:string, cUserId:string): Observable<any> {
    return this.http.delete<any>(environment.dislinktUrl + `/user/${userId}/connect/${cUserId}`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  acceptConnectRequest(userId:string, cUserId:string): Observable<any> {
    return this.http.put<any>(environment.dislinktUrl + `/user/${userId}/connect/invitation/${cUserId}`,{}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  declineConnectRequest(userId:string, cUserId:string): Observable<any> {
    return this.http.delete<any>(environment.dislinktUrl + `/user/${userId}/connect/invitation/${cUserId}`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  cancelConnectRequest(userId:string, cUserId:string): Observable<any> {
    return this.http.delete<any>(environment.dislinktUrl + `/user/${userId}/connect/invitation/${cUserId}/cancel`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(() => new Error('Error'));
  }
}
