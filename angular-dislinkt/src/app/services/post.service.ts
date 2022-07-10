import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getConnectedPosts(id: string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${id}/connect/post`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addComment(userId: string, postId:string, comment:IComment): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/user/${userId}/post/${postId}/comment`,comment).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  likePost(userId: string, postId:string): Observable<any> {
    return this.http.put<any>(environment.dislinktUrl + `/user/${userId}/post/${postId}/reaction/like`,{reactionBy: userId}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  unlikePost(userId: string, postId:string): Observable<any> {
    return this.http.put<any>(environment.dislinktUrl + `/user/${userId}/post/${postId}/reaction/unlike`,{reactionBy: userId}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  dislikePost(userId: string, postId:string): Observable<any> {
    return this.http.put<any>(environment.dislinktUrl + `/user/${userId}/post/${postId}/reaction/dislike`,{reactionBy: userId}).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUserPosts(id: string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${id}/post`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPublicUserPosts(id: string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/user/${id}/public`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(() => new Error('Error'));
  }
}
