import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../modules/models/user";
import {Sign} from "../modules/models/sign";
import {Observable} from "rxjs";
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

//todo: ты не доделал регистрацию

  login(user:User) {
    return this.http.post <any>('/token/generate-token', user);/*
      .map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

      return user;
    });*/
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return null;
  }

  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
