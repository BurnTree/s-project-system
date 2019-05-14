import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../modules/models/user";
import {Sign} from "../modules/models/sign";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

//todo:вернуть целого user
  login(user:User) {
    return this.http.post <any>('http://localhost:8081/token/generate', user).pipe(
      map(returnToken => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("token", returnToken.token);
        localStorage.setItem("role", user.role.name);
        console.log(returnToken);
        console.log(user);
      return returnToken;
    }))
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public logout(){
    localStorage.clear();
  }

  public getRole(){
    return localStorage.getItem('role');
  }
}
