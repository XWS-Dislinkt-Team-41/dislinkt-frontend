import { IMessage } from './../model/message';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getChatMessages(roomId:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/chatRoom/${roomId}/`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  sendMessage(roomId:string,message:IMessage): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/chatRoom/${roomId}/send`,message).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

getConnectedChats(userId:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/connections/${userId}/`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

 private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(() => new Error('Error'));
  }

}
