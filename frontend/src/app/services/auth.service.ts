import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../modules/models/user";
import {Sign} from "../modules/models/sign";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

//todo:вернуть целого user
  login(user:User) {
    return this.http.post <any>('http://localhost:8081/token/generate', user).pipe(
      map(returnToken => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes

        localStorage.setItem("token", returnToken.token);
        this.setUser(user.sign.login);
        console.log(returnToken);
      return returnToken;
    }))
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public logout(){
    localStorage.clear();
  }

  public setUser(login: string){

    this.userService.getUserByLogin(login).subscribe((u:User)=> {
        localStorage.setItem('user', JSON.stringify(u));
        console.log(u);
      }
    );
  }

  public getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }
}
