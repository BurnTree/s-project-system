import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/models/user";
import {Project} from "../modules/models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  saveProject(project: Project):Observable<Project>{
    return this.http.post<Project>('api/project',project);
  }
}
