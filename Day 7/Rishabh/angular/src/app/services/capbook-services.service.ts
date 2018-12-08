import { User } from './../interfaces/User/user';
import { Injectable } from '@angular/core';
import {Observer, Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Post } from '../interfaces/Post/post';



@Injectable({
  providedIn: 'root'
})
export class CapbookServicesService {

  constructor(private httpClient: HttpClient) { }
  public acceptUserDetails(user: any): Observable<void> {
    return this.httpClient.post<void>('http://localhost:4444/registerCustomer', user, {}).pipe(catchError(this.handleError));
  }

  public login(user: any): Observable<User> {
    return this.httpClient.post<User>('http://localhost:4444/getLoginAction', user, {}).pipe(catchError(this.handleError));
  }

  public fetchUserDetails(user: any): Observable<User> {
    return this.httpClient.post<User>('http://localhost:4444/getUserDetails', user, {}).pipe(catchError(this.handleError));
  }

  public changePassword(user: any): Observable<void> {
    return this.httpClient.post<void>
    ('http://localhost:4444/updateUserDetails', user, {}).pipe(catchError(this.handleError));
  }

  public updateStatus(post: any): Observable<void> {
    return this.httpClient.post<void>('http://localhost:4444/updatePost', post, {}).pipe(catchError(this.handleError));
  }

  public getAllPosts(user: any): Observable<Post[]> {
    return this.httpClient.post<Post[]>('http://localhost:4444/getAllPosts', user, {}).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    if (error instanceof ErrorEvent) {
      console.error(`1 An ErrorEvent occurred: `, error.error.message);
      return throwError(error.error.message);
    } else if (error instanceof HttpErrorResponse) {
      console.error(`2 Backend returned code ${error.status}, body was: ${error.message}`);
      return throwError(`Backend returned code ${error.status}, body was: ${error.message}`);
    } else if (error instanceof TypeError) {
      console.error(`3 TypeError has occured ${error.message}, body was: ${error.stack}`);
      return throwError(`TypeError has occured ${error.message}, body was: ${error.stack}`);
    }
  }
}
