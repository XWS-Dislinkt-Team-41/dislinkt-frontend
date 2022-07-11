import { IJobOffer } from './../model/jobOffer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  getJobOffers(): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/jobOffer`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getJobOffer(id:string): Observable<any> {
    return this.http.get<any>(environment.dislinktUrl + `/jobOffer/${id}`).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createJobOffer(jobOffer:IJobOffer): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/jobOffer`,jobOffer).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateJobOffer(jobOffer:IJobOffer): Observable<any> {
    return this.http.put<any>(environment.dislinktUrl + `/jobOffer/`,jobOffer).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  searchJobOffer(filter:string): Observable<any> {
    return this.http.post<any>(environment.dislinktUrl + `/jobOffer/search`,JSON.stringify(filter)).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(() => new Error('Error'));
  }
}
