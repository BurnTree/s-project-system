import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../modules/models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>('api/task/all');
  }

  getById(id: string):Observable<Task>{
    return this.http.get<Task>('http://localhost:8081/api/task/'+id);
  }

  saveTask(task: Task):Observable<Task>{
    return this.http.post<Task>('http://localhost:8081/api/task',task);
  }

  updateTask(task: Task):Observable<Task>{
    return this.http.put<Task>('api/task/'+task.idTask,task);
  }

  getPageTask(page: number, size: number):Observable<any>{
    return this.http.get<any>('/api/task/page?page=' + page + "&size="+size);
  }
}
